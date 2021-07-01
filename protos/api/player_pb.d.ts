// package: moofs.api
// file: api/player.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RegisterPlayerRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): RegisterPlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterPlayerRequest): RegisterPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterPlayerRequest;
    static deserializeBinaryFromReader(message: RegisterPlayerRequest, reader: jspb.BinaryReader): RegisterPlayerRequest;
}

export namespace RegisterPlayerRequest {
    export type AsObject = {
        username: string,
    }
}

export class RegisterPlayerResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): RegisterPlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterPlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterPlayerResponse): RegisterPlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterPlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterPlayerResponse;
    static deserializeBinaryFromReader(message: RegisterPlayerResponse, reader: jspb.BinaryReader): RegisterPlayerResponse;
}

export namespace RegisterPlayerResponse {
    export type AsObject = {
        id: string,
    }
}

export class GetPlayerRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetPlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerRequest): GetPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerRequest;
    static deserializeBinaryFromReader(message: GetPlayerRequest, reader: jspb.BinaryReader): GetPlayerRequest;
}

export namespace GetPlayerRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetPlayerResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetPlayerResponse;
    getCreatedAt(): string;
    setCreatedAt(value: string): GetPlayerResponse;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): GetPlayerResponse;
    getUsername(): string;
    setUsername(value: string): GetPlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerResponse): GetPlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerResponse;
    static deserializeBinaryFromReader(message: GetPlayerResponse, reader: jspb.BinaryReader): GetPlayerResponse;
}

export namespace GetPlayerResponse {
    export type AsObject = {
        id: string,
        createdAt: string,
        updatedAt: string,
        username: string,
    }
}
