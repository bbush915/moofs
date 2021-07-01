// package: moofs.api
// file: api/rank.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class InitRankRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): InitRankRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitRankRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InitRankRequest): InitRankRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitRankRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitRankRequest;
    static deserializeBinaryFromReader(message: InitRankRequest, reader: jspb.BinaryReader): InitRankRequest;
}

export namespace InitRankRequest {
    export type AsObject = {
        playerId: string,
    }
}

export class InitRankResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): InitRankResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitRankResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InitRankResponse): InitRankResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitRankResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitRankResponse;
    static deserializeBinaryFromReader(message: InitRankResponse, reader: jspb.BinaryReader): InitRankResponse;
}

export namespace InitRankResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class GetRankRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): GetRankRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRankRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRankRequest): GetRankRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRankRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRankRequest;
    static deserializeBinaryFromReader(message: GetRankRequest, reader: jspb.BinaryReader): GetRankRequest;
}

export namespace GetRankRequest {
    export type AsObject = {
        playerId: string,
    }
}

export class GetRankResponse extends jspb.Message { 
    getCurrentRank(): string;
    setCurrentRank(value: string): GetRankResponse;
    getCurrentPoints(): number;
    setCurrentPoints(value: number): GetRankResponse;

    hasNextRank(): boolean;
    clearNextRank(): void;
    getNextRank(): string | undefined;
    setNextRank(value: string): GetRankResponse;

    hasRequiredPoints(): boolean;
    clearRequiredPoints(): void;
    getRequiredPoints(): number | undefined;
    setRequiredPoints(value: number): GetRankResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRankResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRankResponse): GetRankResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRankResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRankResponse;
    static deserializeBinaryFromReader(message: GetRankResponse, reader: jspb.BinaryReader): GetRankResponse;
}

export namespace GetRankResponse {
    export type AsObject = {
        currentRank: string,
        currentPoints: number,
        nextRank?: string,
        requiredPoints?: number,
    }
}

export class AdvanceRankRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): AdvanceRankRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdvanceRankRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AdvanceRankRequest): AdvanceRankRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdvanceRankRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdvanceRankRequest;
    static deserializeBinaryFromReader(message: AdvanceRankRequest, reader: jspb.BinaryReader): AdvanceRankRequest;
}

export namespace AdvanceRankRequest {
    export type AsObject = {
        playerId: string,
    }
}

export class AdvanceRankResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): AdvanceRankResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdvanceRankResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AdvanceRankResponse): AdvanceRankResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdvanceRankResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdvanceRankResponse;
    static deserializeBinaryFromReader(message: AdvanceRankResponse, reader: jspb.BinaryReader): AdvanceRankResponse;
}

export namespace AdvanceRankResponse {
    export type AsObject = {
        success: boolean,
    }
}
