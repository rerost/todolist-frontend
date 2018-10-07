PROTOC_SRC_DIR := ${PWD}/src/api/protos
PROTOC_OUT_DIR := ${PWD}/src/api/

PROTOC_SRC := $(shell ls -R ${PROTOC_SRC_DIR}/* | grep -E ".*\.proto")

# GOOGLE_API_DIR := ${GOPATH}/src/github.com/googleapis/googleapis/google/api
# GOOGLE_PROTOC := $(shell ls -R {GOOGLE_API_DIR}/* | grep -E ".*\.proto")

PHONY: protoc
protoc: 
	protoc \
		-I ${PROTOC_SRC_DIR} \
		-I ${GOPATH}/src \
		-I ${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		--plugin=/usr/local/bin/protoc-gen-grpc-web \
		--js_out=import_style=commonjs:${PROTOC_OUT_DIR} \
		--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${PROTOC_OUT_DIR} \
		${PROTOC_SRC} 
