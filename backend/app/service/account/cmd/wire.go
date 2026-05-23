//go:build wireinject
// +build wireinject

package main

import (
	"github.com/google/wire"

	"github.com/qhai-dev/galio/library/galio"
	server "github.com/qhai-dev/galio/service/account/rpc"
)

func initialize(*galio.App) error {
	wire.Build(
		server.ProviderSet,
	)

	return nil
}
