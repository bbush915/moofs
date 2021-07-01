// package: moofs.api
// file: api/game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetQuestionRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): GetQuestionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuestionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuestionRequest): GetQuestionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuestionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuestionRequest;
    static deserializeBinaryFromReader(message: GetQuestionRequest, reader: jspb.BinaryReader): GetQuestionRequest;
}

export namespace GetQuestionRequest {
    export type AsObject = {
        playerId: string,
    }
}

export class GetQuestionResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetQuestionResponse;
    getCategory(): string;
    setCategory(value: string): GetQuestionResponse;
    getDifficulty(): string;
    setDifficulty(value: string): GetQuestionResponse;
    getQuestion(): string;
    setQuestion(value: string): GetQuestionResponse;
    clearChoicesList(): void;
    getChoicesList(): Array<string>;
    setChoicesList(value: Array<string>): GetQuestionResponse;
    addChoices(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuestionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuestionResponse): GetQuestionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuestionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuestionResponse;
    static deserializeBinaryFromReader(message: GetQuestionResponse, reader: jspb.BinaryReader): GetQuestionResponse;
}

export namespace GetQuestionResponse {
    export type AsObject = {
        id: string,
        category: string,
        difficulty: string,
        question: string,
        choicesList: Array<string>,
    }
}

export class AnswerQuestionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): AnswerQuestionRequest;
    getAnswer(): string;
    setAnswer(value: string): AnswerQuestionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnswerQuestionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AnswerQuestionRequest): AnswerQuestionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnswerQuestionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnswerQuestionRequest;
    static deserializeBinaryFromReader(message: AnswerQuestionRequest, reader: jspb.BinaryReader): AnswerQuestionRequest;
}

export namespace AnswerQuestionRequest {
    export type AsObject = {
        id: string,
        answer: string,
    }
}

export class AnswerQuestionResponse extends jspb.Message { 
    getCorrect(): boolean;
    setCorrect(value: boolean): AnswerQuestionResponse;
    getTimeElapsed(): number;
    setTimeElapsed(value: number): AnswerQuestionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnswerQuestionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AnswerQuestionResponse): AnswerQuestionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnswerQuestionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnswerQuestionResponse;
    static deserializeBinaryFromReader(message: AnswerQuestionResponse, reader: jspb.BinaryReader): AnswerQuestionResponse;
}

export namespace AnswerQuestionResponse {
    export type AsObject = {
        correct: boolean,
        timeElapsed: number,
    }
}
