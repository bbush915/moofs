#!/usr/bin/env bash

PROTO_DIR="./protos"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"


$GRPC_TOOLS_NODE_PROTOC \
    --plugin=protoc-gen-ts="$PROTOC_GEN_TS_PATH" \
    --js_out=import_style=commonjs,binary:"$PROTO_DIR" \
    --ts_out=grpc_js:"$PROTO_DIR" \
    --grpc_out=grpc_js:"$PROTO_DIR" \
    -I "$PROTO_DIR" \
    "$PROTO_DIR"/**/*.proto