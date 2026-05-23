package rpc

import (
	"github.com/google/wire"
	"github.com/qhai-dev/galio/service/account/rpc/handler"
)

var ProviderSet = wire.NewSet(
	handler.NewAccountService,
	NewRPCServer,
)
