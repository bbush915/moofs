// package: moofs.api
// file: api/player.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_player_pb from "../api/player_pb";

interface IPlayerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerPlayer: IPlayerService_IRegisterPlayer;
    getPlayer: IPlayerService_IGetPlayer;
}

interface IPlayerService_IRegisterPlayer extends grpc.MethodDefinition<api_player_pb.RegisterPlayerRequest, api_player_pb.RegisterPlayerResponse> {
    path: "/moofs.api.Player/RegisterPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_player_pb.RegisterPlayerRequest>;
    requestDeserialize: grpc.deserialize<api_player_pb.RegisterPlayerRequest>;
    responseSerialize: grpc.serialize<api_player_pb.RegisterPlayerResponse>;
    responseDeserialize: grpc.deserialize<api_player_pb.RegisterPlayerResponse>;
}
interface IPlayerService_IGetPlayer extends grpc.MethodDefinition<api_player_pb.GetPlayerRequest, api_player_pb.GetPlayerResponse> {
    path: "/moofs.api.Player/GetPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_player_pb.GetPlayerRequest>;
    requestDeserialize: grpc.deserialize<api_player_pb.GetPlayerRequest>;
    responseSerialize: grpc.serialize<api_player_pb.GetPlayerResponse>;
    responseDeserialize: grpc.deserialize<api_player_pb.GetPlayerResponse>;
}

export const PlayerService: IPlayerService;

export interface IPlayerServer extends grpc.UntypedServiceImplementation {
    registerPlayer: grpc.handleUnaryCall<api_player_pb.RegisterPlayerRequest, api_player_pb.RegisterPlayerResponse>;
    getPlayer: grpc.handleUnaryCall<api_player_pb.GetPlayerRequest, api_player_pb.GetPlayerResponse>;
}

export interface IPlayerClient {
    registerPlayer(request: api_player_pb.RegisterPlayerRequest, callback: (error: grpc.ServiceError | null, response: api_player_pb.RegisterPlayerResponse) => void): grpc.ClientUnaryCall;
    registerPlayer(request: api_player_pb.RegisterPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_player_pb.RegisterPlayerResponse) => void): grpc.ClientUnaryCall;
    registerPlayer(request: api_player_pb.RegisterPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_player_pb.RegisterPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: api_player_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: api_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: api_player_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: api_player_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
}

export class PlayerClient extends grpc.Client implements IPlayerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public registerPlayer(request: api_player_pb.RegisterPlayerRequest, callback: (error: grpc.ServiceError | null, response: api_player_pb.RegisterPlayerResponse) => void): grpc.ClientUnaryCall;
    public registerPlayer(request: api_player_pb.RegisterPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_player_pb.RegisterPlayerResponse) => void): grpc.ClientUnaryCall;
    public registerPlayer(request: api_player_pb.RegisterPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_player_pb.RegisterPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: api_player_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: api_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: api_player_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: api_player_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_player_pb.GetPlayerResponse) => void): grpc.ClientUnaryCall;
}
