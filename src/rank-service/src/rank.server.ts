import { sendUnaryData, ServerUnaryCall, status } from "@grpc/grpc-js";
import knex from "knex";
import { v4 } from "uuid";

import configuration from "../../../db/knexfile";
import { IRankServer } from "../../../protos/api/rank_grpc_pb";
import {
  AdvanceRankRequest,
  AdvanceRankResponse,
  GetRankRequest,
  GetRankResponse,
  InitRankRequest,
  InitRankResponse,
} from "../../../protos/api/rank_pb";

const db = knex(configuration);

export const RankServerImpl: IRankServer = {
  initRank: (
    { request }: ServerUnaryCall<InitRankRequest, InitRankResponse>,
    callback: sendUnaryData<InitRankResponse>
  ): void => {
    (async () => {
      const playerId = request.getPlayerId();

      const existingPlayerRank = await db("player_ranks").where("player_id", "=", playerId).first();

      if (existingPlayerRank) {
        callback({
          code: status.ALREADY_EXISTS,
          message: `Player is already ranked`,
        });

        return;
      }

      const initialRank = await db("ranks").where({ level: 1 }).first();

      const now = new Date().toISOString();

      const playerRank = {
        id: v4(),
        created_at: now,
        updated_at: now,
        player_id: playerId,
        rank_id: initialRank.id,
        points: 0,
      };

      await db("player_ranks").insert(playerRank);

      const response = new InitRankResponse().setSuccess(true);
      callback(null, response);
    })();
  },

  getRank: (
    { request }: ServerUnaryCall<GetRankRequest, GetRankResponse>,
    callback: sendUnaryData<GetRankResponse>
  ): void => {
    (async () => {
      const playerId = request.getPlayerId();

      const playerRank = await db("player_ranks").where("player_id", "=", playerId).first();

      if (!playerRank) {
        callback({
          code: status.NOT_FOUND,
          message: `Player is not ranked`,
        });

        return;
      }

      const ranks = await db("ranks");

      const currentRank = ranks.find((x) => x.id === playerRank.rank_id);
      const nextRank = ranks.find((x) => x.level === currentRank.level + 1);

      const response = new GetRankResponse()
        .setCurrentRank(currentRank.name)
        .setCurrentPoints(playerRank.points)
        .setNextRank(nextRank?.name)
        .setRequiredPoints(nextRank?.cost);

      callback(null, response);
    })();
  },

  advanceRank: (
    { request }: ServerUnaryCall<AdvanceRankRequest, AdvanceRankResponse>,
    callback: sendUnaryData<AdvanceRankResponse>
  ): void => {
    (async () => {
      const playerId = request.getPlayerId();

      const playerRank = await db("player_ranks").where("player_id", "=", playerId).first();

      if (!playerRank) {
        callback({
          code: status.NOT_FOUND,
          message: `Player is not ranked`,
        });

        return;
      }

      const ranks = await db("ranks");

      let success = false;

      const currentRank = ranks.find((x) => x.id === playerRank.rank_id);
      const nextRank = ranks.find((x) => x.level === currentRank.level + 1);

      if (nextRank && playerRank.points >= nextRank.cost) {
        await db("player_ranks")
          .where("id", "=", playerRank.id)
          .update({ rank_id: nextRank.id, points: playerRank.points - nextRank.cost });

        success = true;
      }

      const response = new AdvanceRankResponse().setSuccess(success);
      callback(null, response);
    })();
  },
};
