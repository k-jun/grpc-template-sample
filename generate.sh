#!/bin/sh

CLIENT_OUTPUT_DIR=client/src/grpc
SERVER_OUTPUT_DIR=server/grpc

mkdir -p ${CLIENT_OUTPUT_DIR} ${SERVER_OUTPUT_DIR}

# protocol/helloworld.proto
#  --js_out => helloworld_pb.js
#  --grpc-web_out => helloworld_pb.d.ts
#  --grpc-web_out => HelloworldServiceClientPb.ts
#  --go_out => helloworld.pb.go
protoc --proto_path=protocol helloworld.proto \
    --js_out=import_style=commonjs:${CLIENT_OUTPUT_DIR} \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${CLIENT_OUTPUT_DIR} \
    --go_out=plugins=grpc:${SERVER_OUTPUT_DIR}
