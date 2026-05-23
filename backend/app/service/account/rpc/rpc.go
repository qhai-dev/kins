package rpc

import "github.com/qhai-dev/galio/service/account/rpc/handler"

func NewRPCServer(handler *handler.AccountService) error {
	// srv := rpc.NewServer()

	// handler.Handler()

	// return srv
	handler.Handler()

	return nil
}
