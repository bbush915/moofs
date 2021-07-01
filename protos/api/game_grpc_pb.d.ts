// package: moofs.api
// file: api/game.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_game_pb from "../api/game_pb";

interface IGameService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getQuestion: IGameService_IGetQuestion;
    answerQuestion: IGameService_IAnswerQuestion;
}

interface IGameService_IGetQuestion extends grpc.MethodDefinition<api_game_pb.GetQuestionRequest, api_game_pb.GetQuestionResponse> {
    path: "/moofs.api.Game/GetQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_game_pb.GetQuestionRequest>;
    requestDeserialize: grpc.deserialize<api_game_pb.GetQuestionRequest>;
    responseSerialize: grpc.serialize<api_game_pb.GetQuestionResponse>;
    responseDeserialize: grpc.deserialize<api_game_pb.GetQuestionResponse>;
}
interface IGameService_IAnswerQuestion extends grpc.MethodDefinition<api_game_pb.AnswerQuestionRequest, api_game_pb.AnswerQuestionResponse> {
    path: "/moofs.api.Game/AnswerQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_game_pb.AnswerQuestionRequest>;
    requestDeserialize: grpc.deserialize<api_game_pb.AnswerQuestionRequest>;
    responseSerialize: grpc.serialize<api_game_pb.AnswerQuestionResponse>;
    responseDeserialize: grpc.deserialize<api_game_pb.AnswerQuestionResponse>;
}

export const GameService: IGameService;

export interface IGameServer extends grpc.UntypedServiceImplementation {
    getQuestion: grpc.handleUnaryCall<api_game_pb.GetQuestionRequest, api_game_pb.GetQuestionResponse>;
    answerQuestion: grpc.handleUnaryCall<api_game_pb.AnswerQuestionRequest, api_game_pb.AnswerQuestionResponse>;
}

export interface IGameClient {
    getQuestion(request: api_game_pb.GetQuestionRequest, callback: (error: grpc.ServiceError | null, response: api_game_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    getQuestion(request: api_game_pb.GetQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_game_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    getQuestion(request: api_game_pb.GetQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_game_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    answerQuestion(request: api_game_pb.AnswerQuestionRequest, callback: (error: grpc.ServiceError | null, response: api_game_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
    answerQuestion(request: api_game_pb.AnswerQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_game_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
    answerQuestion(request: api_game_pb.AnswerQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_game_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
}

export class GameClient extends grpc.Client implements IGameClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getQuestion(request: api_game_pb.GetQuestionRequest, callback: (error: grpc.ServiceError | null, response: api_game_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public getQuestion(request: api_game_pb.GetQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_game_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public getQuestion(request: api_game_pb.GetQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_game_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public answerQuestion(request: api_game_pb.AnswerQuestionRequest, callback: (error: grpc.ServiceError | null, response: api_game_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
    public answerQuestion(request: api_game_pb.AnswerQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_game_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
    public answerQuestion(request: api_game_pb.AnswerQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_game_pb.AnswerQuestionResponse) => void): grpc.ClientUnaryCall;
}
