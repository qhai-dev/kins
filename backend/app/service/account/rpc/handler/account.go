package handler

import (
	"fmt"

	"github.com/qhai-dev/galio/library/galio"
)

type AccountService struct {
	//
}

func NewAccountService(app *galio.App) *AccountService {
	return &AccountService{
		//
	}
}

func (t *AccountService) Handler() {
	fmt.Print("rpc handler \n")
}
