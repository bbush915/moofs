import { sendUnaryData, ServerUnaryCall, status } from "@grpc/grpc-js";
import knex from "knex";
import { v4 } from "uuid";

import configuration from "../../../db/knexfile";
import { IPlayerServer } from "../../../protos/api/player_grpc_pb";
import {
  GetPlayerRequest,
  GetPlayerResponse,
  RegisterPlayerRequest,
  RegisterPlayerResponse,
} from "../../../protos/api/player_pb";

const db = knex(configuration);

export const PlayerServerImpl: IPlayerServer = {
  registerPlayer: (
    { request }: ServerUnaryCall<RegisterPlayerRequest, RegisterPlayerResponse>,
    callback: sendUnaryData<RegisterPlayerResponse>
  ): void => {
    (async () => {
      const username = request.getUsername();

      const existingPlayer = await db("players").where("username", "=", username).first();

      if (existingPlayer) {
        callback({
          code: status.ALREADY_EXISTS,
          message: `Player already exists`,
        });

        return;
      }

      const now = new Date().toISOString();

      const player = {
        id: v4(),
        created_at: now,
        updated_at: now,
        username,
      };

      await db("players").insert(player);

      const response = new RegisterPlayerResponse().setId(player.id);
      callback(null, response);
    })();
  },

  getPlayer: (
    { request }: ServerUnaryCall<GetPlayerRequest, GetPlayerResponse>,
    callback: sendUnaryData<GetPlayerResponse>
  ): void => {
    (async () => {
      const id = request.getId();

      const player = await db("players").where("id", "=", id).first();

      if (!player) {
        callback({ code: status.NOT_FOUND, message: "Player not found" });
        return;
      }

      const response = new GetPlayerResponse()
        .setId(player.id)
        .setCreatedAt(player.created_at)
        .setUpdatedAt(player.updated_at)
        .setUsername(player.username);

      callback(null, response);
    })();
  },
};
