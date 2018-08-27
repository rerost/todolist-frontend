#!/bin/bash
# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/client"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=true:${OUT_DIR}" \
    -I "${GOPATH}/src/github.com/rerost/todolist-server/api/protos" \
    -I "${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis" \
    "${GOPATH}/src/github.com/rerost/todolist-server/api/protos/task.proto"
