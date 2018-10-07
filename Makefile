PROTOC_SRC_DIR := ${PWD}/src/api/protos
PROTOC_OUT_DIR := ${PWD}/src/api/

PROTOC_SRC := $(shell ls -R ${PROTOC_SRC_DIR}/* | grep -E ".*\.proto")

PHONY: protoc
protoc: 
	protoc \
		-I ${PROTOC_SRC_DIR} \
		-I /usr/local/include \
		-I ${GOPATH}/src \
		-I ${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		${PROTOC_SRC} \
		--js_out=import_style=typescript:${PROTOC_OUT_DIR} \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTOC_OUT_DIR}
