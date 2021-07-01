// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_player_pb = require('../api/player_pb.js');

function serialize_moofs_api_GetPlayerRequest(arg) {
  if (!(arg instanceof api_player_pb.GetPlayerRequest)) {
    throw new Error('Expected argument of type moofs.api.GetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_GetPlayerRequest(buffer_arg) {
  return api_player_pb.GetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_GetPlayerResponse(arg) {
  if (!(arg instanceof api_player_pb.GetPlayerResponse)) {
    throw new Error('Expected argument of type moofs.api.GetPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_GetPlayerResponse(buffer_arg) {
  return api_player_pb.GetPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_RegisterPlayerRequest(arg) {
  if (!(arg instanceof api_player_pb.RegisterPlayerRequest)) {
    throw new Error('Expected argument of type moofs.api.RegisterPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_RegisterPlayerRequest(buffer_arg) {
  return api_player_pb.RegisterPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_moofs_api_RegisterPlayerResponse(arg) {
  if (!(arg instanceof api_player_pb.RegisterPlayerResponse)) {
    throw new Error('Expected argument of type moofs.api.RegisterPlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_moofs_api_RegisterPlayerResponse(buffer_arg) {
  return api_player_pb.RegisterPlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlayerService = exports.PlayerService = {
  registerPlayer: {
    path: '/moofs.api.Player/RegisterPlayer',
    requestStream: false,
    responseStream: false,
    requestType: api_player_pb.RegisterPlayerRequest,
    responseType: api_player_pb.RegisterPlayerResponse,
    requestSerialize: serialize_moofs_api_RegisterPlayerRequest,
    requestDeserialize: deserialize_moofs_api_RegisterPlayerRequest,
    responseSerialize: serialize_moofs_api_RegisterPlayerResponse,
    responseDeserialize: deserialize_moofs_api_RegisterPlayerResponse,
  },
  getPlayer: {
    path: '/moofs.api.Player/GetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: api_player_pb.GetPlayerRequest,
    responseType: api_player_pb.GetPlayerResponse,
    requestSerialize: serialize_moofs_api_GetPlayerRequest,
    requestDeserialize: deserialize_moofs_api_GetPlayerRequest,
    responseSerialize: serialize_moofs_api_GetPlayerResponse,
    responseDeserialize: deserialize_moofs_api_GetPlayerResponse,
  },
};

exports.PlayerClient = grpc.makeGenericClientConstructor(PlayerService);
