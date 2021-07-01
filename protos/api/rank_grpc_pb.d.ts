// package: moofs.api
// file: api/rank.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_rank_pb from "../api/rank_pb";

interface IRankService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    initRank: IRankService_IInitRank;
    getRank: IRankService_IGetRank;
    grantPoints: IRankService_IGrantPoints;
    advanceRank: IRankService_IAdvanceRank;
}

interface IRankService_IInitRank extends grpc.MethodDefinition<api_rank_pb.InitRankRequest, api_rank_pb.InitRankResponse> {
    path: "/moofs.api.Rank/InitRank";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_rank_pb.InitRankRequest>;
    requestDeserialize: grpc.deserialize<api_rank_pb.InitRankRequest>;
    responseSerialize: grpc.serialize<api_rank_pb.InitRankResponse>;
    responseDeserialize: grpc.deserialize<api_rank_pb.InitRankResponse>;
}
interface IRankService_IGetRank extends grpc.MethodDefinition<api_rank_pb.GetRankRequest, api_rank_pb.GetRankResponse> {
    path: "/moofs.api.Rank/GetRank";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_rank_pb.GetRankRequest>;
    requestDeserialize: grpc.deserialize<api_rank_pb.GetRankRequest>;
    responseSerialize: grpc.serialize<api_rank_pb.GetRankResponse>;
    responseDeserialize: grpc.deserialize<api_rank_pb.GetRankResponse>;
}
interface IRankService_IGrantPoints extends grpc.MethodDefinition<api_rank_pb.GrantPointsRequest, api_rank_pb.GrantPointsResponse> {
    path: "/moofs.api.Rank/GrantPoints";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_rank_pb.GrantPointsRequest>;
    requestDeserialize: grpc.deserialize<api_rank_pb.GrantPointsRequest>;
    responseSerialize: grpc.serialize<api_rank_pb.GrantPointsResponse>;
    responseDeserialize: grpc.deserialize<api_rank_pb.GrantPointsResponse>;
}
interface IRankService_IAdvanceRank extends grpc.MethodDefinition<api_rank_pb.AdvanceRankRequest, api_rank_pb.AdvanceRankResponse> {
    path: "/moofs.api.Rank/AdvanceRank";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_rank_pb.AdvanceRankRequest>;
    requestDeserialize: grpc.deserialize<api_rank_pb.AdvanceRankRequest>;
    responseSerialize: grpc.serialize<api_rank_pb.AdvanceRankResponse>;
    responseDeserialize: grpc.deserialize<api_rank_pb.AdvanceRankResponse>;
}

export const RankService: IRankService;

export interface IRankServer extends grpc.UntypedServiceImplementation {
    initRank: grpc.handleUnaryCall<api_rank_pb.InitRankRequest, api_rank_pb.InitRankResponse>;
    getRank: grpc.handleUnaryCall<api_rank_pb.GetRankRequest, api_rank_pb.GetRankResponse>;
    grantPoints: grpc.handleUnaryCall<api_rank_pb.GrantPointsRequest, api_rank_pb.GrantPointsResponse>;
    advanceRank: grpc.handleUnaryCall<api_rank_pb.AdvanceRankRequest, api_rank_pb.AdvanceRankResponse>;
}

export interface IRankClient {
    initRank(request: api_rank_pb.InitRankRequest, callback: (error: grpc.ServiceError | null, response: api_rank_pb.InitRankResponse) => void): grpc.ClientUnaryCall;
    initRank(request: api_rank_pb.InitRankRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_rank_pb.InitRankResponse) => void): grpc.ClientUnaryCall;
    initRank(request: api_rank_pb.InitRankRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_rank_pb.InitRankResponse) => void): grpc.ClientUnaryCall;
    getRank(request: api_rank_pb.GetRankRequest, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GetRankResponse) => void): grpc.ClientUnaryCall;
    getRank(request: api_rank_pb.GetRankRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GetRankResponse) => void): grpc.ClientUnaryCall;
    getRank(request: api_rank_pb.GetRankRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GetRankResponse) => void): grpc.ClientUnaryCall;
    grantPoints(request: api_rank_pb.GrantPointsRequest, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GrantPointsResponse) => void): grpc.ClientUnaryCall;
    grantPoints(request: api_rank_pb.GrantPointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GrantPointsResponse) => void): grpc.ClientUnaryCall;
    grantPoints(request: api_rank_pb.GrantPointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GrantPointsResponse) => void): grpc.ClientUnaryCall;
    advanceRank(request: api_rank_pb.AdvanceRankRequest, callback: (error: grpc.ServiceError | null, response: api_rank_pb.AdvanceRankResponse) => void): grpc.ClientUnaryCall;
    advanceRank(request: api_rank_pb.AdvanceRankRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_rank_pb.AdvanceRankResponse) => void): grpc.ClientUnaryCall;
    advanceRank(request: api_rank_pb.AdvanceRankRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_rank_pb.AdvanceRankResponse) => void): grpc.ClientUnaryCall;
}

export class RankClient extends grpc.Client implements IRankClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public initRank(request: api_rank_pb.InitRankRequest, callback: (error: grpc.ServiceError | null, response: api_rank_pb.InitRankResponse) => void): grpc.ClientUnaryCall;
    public initRank(request: api_rank_pb.InitRankRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_rank_pb.InitRankResponse) => void): grpc.ClientUnaryCall;
    public initRank(request: api_rank_pb.InitRankRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_rank_pb.InitRankResponse) => void): grpc.ClientUnaryCall;
    public getRank(request: api_rank_pb.GetRankRequest, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GetRankResponse) => void): grpc.ClientUnaryCall;
    public getRank(request: api_rank_pb.GetRankRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GetRankResponse) => void): grpc.ClientUnaryCall;
    public getRank(request: api_rank_pb.GetRankRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GetRankResponse) => void): grpc.ClientUnaryCall;
    public grantPoints(request: api_rank_pb.GrantPointsRequest, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GrantPointsResponse) => void): grpc.ClientUnaryCall;
    public grantPoints(request: api_rank_pb.GrantPointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GrantPointsResponse) => void): grpc.ClientUnaryCall;
    public grantPoints(request: api_rank_pb.GrantPointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_rank_pb.GrantPointsResponse) => void): grpc.ClientUnaryCall;
    public advanceRank(request: api_rank_pb.AdvanceRankRequest, callback: (error: grpc.ServiceError | null, response: api_rank_pb.AdvanceRankResponse) => void): grpc.ClientUnaryCall;
    public advanceRank(request: api_rank_pb.AdvanceRankRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_rank_pb.AdvanceRankResponse) => void): grpc.ClientUnaryCall;
    public advanceRank(request: api_rank_pb.AdvanceRankRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_rank_pb.AdvanceRankResponse) => void): grpc.ClientUnaryCall;
}
