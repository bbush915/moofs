// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_game_pb = require('../api/game_pb.js');

function serialize_moofs_api_AnswerQuestionRequest(arg) {
  if (!(arg instanceof api_game_pb.AnswerQuestionRequest)) {
    throw new Error('Expected argument of type moofs.api.AnswerQuestionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_AnswerQuestionRequest(buffer_arg) {
  return api_game_pb.AnswerQuestionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_AnswerQuestionResponse(arg) {
  if (!(arg instanceof api_game_pb.AnswerQuestionResponse)) {
    throw new Error('Expected argument of type moofs.api.AnswerQuestionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_AnswerQuestionResponse(buffer_arg) {
  return api_game_pb.AnswerQuestionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_GetQuestionRequest(arg) {
  if (!(arg instanceof api_game_pb.GetQuestionRequest)) {
    throw new Error('Expected argument of type moofs.api.GetQuestionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_GetQuestionRequest(buffer_arg) {
  return api_game_pb.GetQuestionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_GetQuestionResponse(arg) {
  if (!(arg instanceof api_game_pb.GetQuestionResponse)) {
    throw new Error('Expected argument of type moofs.api.GetQuestionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_GetQuestionResponse(buffer_arg) {
  return api_game_pb.GetQuestionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GameService = exports.GameService = {
  getQuestion: {
    path: '/moofs.api.Game/GetQuestion',
    requestStream: false,
    responseStream: false,
    requestType: api_game_pb.GetQuestionRequest,
    responseType: api_game_pb.GetQuestionResponse,
    requestSerialize: serialize_moofs_api_GetQuestionRequest,
    requestDeserialize: deserialize_moofs_api_GetQuestionRequest,
    responseSerialize: serialize_moofs_api_GetQuestionResponse,
    responseDeserialize: deserialize_moofs_api_GetQuestionResponse,
  },
  answerQuestion: {
    path: '/moofs.api.Game/AnswerQuestion',
    requestStream: false,
    responseStream: false,
    requestType: api_game_pb.AnswerQuestionRequest,
    responseType: api_game_pb.AnswerQuestionResponse,
    requestSerialize: serialize_moofs_api_AnswerQuestionRequest,
    requestDeserialize: deserialize_moofs_api_AnswerQuestionRequest,
    responseSerialize: serialize_moofs_api_AnswerQuestionResponse,
    responseDeserialize: deserialize_moofs_api_AnswerQuestionResponse,
  },
};

exports.GameClient = grpc.makeGenericClientConstructor(GameService);
