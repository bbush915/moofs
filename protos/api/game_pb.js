// source: api/game.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.moofs.api.AnswerQuestionRequest', null, global);
goog.exportSymbol('proto.moofs.api.AnswerQuestionResponse', null, global);
goog.exportSymbol('proto.moofs.api.GetQuestionRequest', null, global);
goog.exportSymbol('proto.moofs.api.GetQuestionResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.moofs.api.GetQuestionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.moofs.api.GetQuestionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.moofs.api.GetQuestionRequest.displayName = 'proto.moofs.api.GetQuestionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.moofs.api.GetQuestionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.moofs.api.GetQuestionResponse.repeatedFields_, null);
};
goog.inherits(proto.moofs.api.GetQuestionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.moofs.api.GetQuestionResponse.displayName = 'proto.moofs.api.GetQuestionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.moofs.api.AnswerQuestionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.moofs.api.AnswerQuestionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.moofs.api.AnswerQuestionRequest.displayName = 'proto.moofs.api.AnswerQuestionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.moofs.api.AnswerQuestionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.moofs.api.AnswerQuestionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.moofs.api.AnswerQuestionResponse.displayName = 'proto.moofs.api.AnswerQuestionResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.moofs.api.GetQuestionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.moofs.api.GetQuestionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.moofs.api.GetQuestionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.moofs.api.GetQuestionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.moofs.api.GetQuestionRequest}
 */
proto.moofs.api.GetQuestionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.moofs.api.GetQuestionRequest;
  return proto.moofs.api.GetQuestionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.moofs.api.GetQuestionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.moofs.api.GetQuestionRequest}
 */
proto.moofs.api.GetQuestionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.moofs.api.GetQuestionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.moofs.api.GetQuestionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.moofs.api.GetQuestionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.moofs.api.GetQuestionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string player_id = 1;
 * @return {string}
 */
proto.moofs.api.GetQuestionRequest.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.moofs.api.GetQuestionRequest} returns this
 */
proto.moofs.api.GetQuestionRequest.prototype.setPlayerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.moofs.api.GetQuestionResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.moofs.api.GetQuestionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.moofs.api.GetQuestionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.moofs.api.GetQuestionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.moofs.api.GetQuestionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    difficulty: jspb.Message.getFieldWithDefault(msg, 3, ""),
    question: jspb.Message.getFieldWithDefault(msg, 4, ""),
    choicesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.moofs.api.GetQuestionResponse}
 */
proto.moofs.api.GetQuestionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.moofs.api.GetQuestionResponse;
  return proto.moofs.api.GetQuestionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.moofs.api.GetQuestionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.moofs.api.GetQuestionResponse}
 */
proto.moofs.api.GetQuestionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDifficulty(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addChoices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.moofs.api.GetQuestionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.moofs.api.GetQuestionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.moofs.api.GetQuestionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.moofs.api.GetQuestionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDifficulty();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuestion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChoicesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.moofs.api.GetQuestionResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.moofs.api.GetQuestionResponse} returns this
 */
proto.moofs.api.GetQuestionResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.moofs.api.GetQuestionResponse.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.moofs.api.GetQuestionResponse} returns this
 */
proto.moofs.api.GetQuestionResponse.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string difficulty = 3;
 * @return {string}
 */
proto.moofs.api.GetQuestionResponse.prototype.getDifficulty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.moofs.api.GetQuestionResponse} returns this
 */
proto.moofs.api.GetQuestionResponse.prototype.setDifficulty = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string question = 4;
 * @return {string}
 */
proto.moofs.api.GetQuestionResponse.prototype.getQuestion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.moofs.api.GetQuestionResponse} returns this
 */
proto.moofs.api.GetQuestionResponse.prototype.setQuestion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string choices = 5;
 * @return {!Array<string>}
 */
proto.moofs.api.GetQuestionResponse.prototype.getChoicesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.moofs.api.GetQuestionResponse} returns this
 */
proto.moofs.api.GetQuestionResponse.prototype.setChoicesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.moofs.api.GetQuestionResponse} returns this
 */
proto.moofs.api.GetQuestionResponse.prototype.addChoices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.moofs.api.GetQuestionResponse} returns this
 */
proto.moofs.api.GetQuestionResponse.prototype.clearChoicesList = function() {
  return this.setChoicesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.moofs.api.AnswerQuestionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.moofs.api.AnswerQuestionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.moofs.api.AnswerQuestionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.moofs.api.AnswerQuestionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    answer: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.moofs.api.AnswerQuestionRequest}
 */
proto.moofs.api.AnswerQuestionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.moofs.api.AnswerQuestionRequest;
  return proto.moofs.api.AnswerQuestionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.moofs.api.AnswerQuestionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.moofs.api.AnswerQuestionRequest}
 */
proto.moofs.api.AnswerQuestionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.moofs.api.AnswerQuestionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.moofs.api.AnswerQuestionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.moofs.api.AnswerQuestionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.moofs.api.AnswerQuestionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnswer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.moofs.api.AnswerQuestionRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.moofs.api.AnswerQuestionRequest} returns this
 */
proto.moofs.api.AnswerQuestionRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string answer = 2;
 * @return {string}
 */
proto.moofs.api.AnswerQuestionRequest.prototype.getAnswer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.moofs.api.AnswerQuestionRequest} returns this
 */
proto.moofs.api.AnswerQuestionRequest.prototype.setAnswer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.moofs.api.AnswerQuestionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.moofs.api.AnswerQuestionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.moofs.api.AnswerQuestionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.moofs.api.AnswerQuestionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    correct: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    timeElapsed: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.moofs.api.AnswerQuestionResponse}
 */
proto.moofs.api.AnswerQuestionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.moofs.api.AnswerQuestionResponse;
  return proto.moofs.api.AnswerQuestionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.moofs.api.AnswerQuestionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.moofs.api.AnswerQuestionResponse}
 */
proto.moofs.api.AnswerQuestionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCorrect(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeElapsed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.moofs.api.AnswerQuestionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.moofs.api.AnswerQuestionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.moofs.api.AnswerQuestionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.moofs.api.AnswerQuestionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCorrect();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTimeElapsed();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional bool correct = 1;
 * @return {boolean}
 */
proto.moofs.api.AnswerQuestionResponse.prototype.getCorrect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.moofs.api.AnswerQuestionResponse} returns this
 */
proto.moofs.api.AnswerQuestionResponse.prototype.setCorrect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 time_elapsed = 2;
 * @return {number}
 */
proto.moofs.api.AnswerQuestionResponse.prototype.getTimeElapsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.moofs.api.AnswerQuestionResponse} returns this
 */
proto.moofs.api.AnswerQuestionResponse.prototype.setTimeElapsed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.moofs.api);
