#!/usr/bin/env bash

set -e

echo "🚀 Initializing development environment..."

go install github.com/bazelbuild/bazelisk@latest

go install github.com/evilmartians/lefthook/v2@v2.1.9

go install github.com/google/wire/cmd/wire@v0.7.0

go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest

go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

go install github.com/sqlc-dev/sqlc/cmd/sqlc@v1.31.1

go install github.com/bazelbuild/buildtools/buildifier@latest

go install github.com/bufbuild/buf/cmd/buf@v1.71.0
