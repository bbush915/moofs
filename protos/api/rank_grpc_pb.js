// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_rank_pb = require('../api/rank_pb.js');

function serialize_moofs_api_AdvanceRankRequest(arg) {
  if (!(arg instanceof api_rank_pb.AdvanceRankRequest)) {
    throw new Error('Expected argument of type moofs.api.AdvanceRankRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_AdvanceRankRequest(buffer_arg) {
  return api_rank_pb.AdvanceRankRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_AdvanceRankResponse(arg) {
  if (!(arg instanceof api_rank_pb.AdvanceRankResponse)) {
    throw new Error('Expected argument of type moofs.api.AdvanceRankResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_AdvanceRankResponse(buffer_arg) {
  return api_rank_pb.AdvanceRankResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_GetRankRequest(arg) {
  if (!(arg instanceof api_rank_pb.GetRankRequest)) {
    throw new Error('Expected argument of type moofs.api.GetRankRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_GetRankRequest(buffer_arg) {
  return api_rank_pb.GetRankRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_GetRankResponse(arg) {
  if (!(arg instanceof api_rank_pb.GetRankResponse)) {
    throw new Error('Expected argument of type moofs.api.GetRankResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_GetRankResponse(buffer_arg) {
  return api_rank_pb.GetRankResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_InitRankRequest(arg) {
  if (!(arg instanceof api_rank_pb.InitRankRequest)) {
    throw new Error('Expected argument of type moofs.api.InitRankRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_InitRankRequest(buffer_arg) {
  return api_rank_pb.InitRankRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_InitRankResponse(arg) {
  if (!(arg instanceof api_rank_pb.InitRankResponse)) {
    throw new Error('Expected argument of type moofs.api.InitRankResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_InitRankResponse(buffer_arg) {
  return api_rank_pb.InitRankResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RankService = exports.RankService = {
  initRank: {
    path: '/moofs.api.Rank/InitRank',
    requestStream: false,
    responseStream: false,
    requestType: api_rank_pb.InitRankRequest,
    responseType: api_rank_pb.InitRankResponse,
    requestSerialize: serialize_moofs_api_InitRankRequest,
    requestDeserialize: deserialize_moofs_api_InitRankRequest,
    responseSerialize: serialize_moofs_api_InitRankResponse,
    responseDeserialize: deserialize_moofs_api_InitRankResponse,
  },
  getRank: {
    path: '/moofs.api.Rank/GetRank',
    requestStream: false,
    responseStream: false,
    requestType: api_rank_pb.GetRankRequest,
    responseType: api_rank_pb.GetRankResponse,
    requestSerialize: serialize_moofs_api_GetRankRequest,
    requestDeserialize: deserialize_moofs_api_GetRankRequest,
    responseSerialize: serialize_moofs_api_GetRankResponse,
    responseDeserialize: deserialize_moofs_api_GetRankResponse,
  },
  advanceRank: {
    path: '/moofs.api.Rank/AdvanceRank',
    requestStream: false,
    responseStream: false,
    requestType: api_rank_pb.AdvanceRankRequest,
    responseType: api_rank_pb.AdvanceRankResponse,
    requestSerialize: serialize_moofs_api_AdvanceRankRequest,
    requestDeserialize: deserialize_moofs_api_AdvanceRankRequest,
    responseSerialize: serialize_moofs_api_AdvanceRankResponse,
    responseDeserialize: deserialize_moofs_api_AdvanceRankResponse,
  },
};

exports.RankClient = grpc.makeGenericClientConstructor(RankService);
