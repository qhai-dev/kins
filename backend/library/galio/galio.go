package galio

import (
	"context"
	"fmt"
	"net/http"
	"sync"

	"github.com/qhai-dev/galio/library/galio/conf"
	"github.com/spf13/viper"
	"google.golang.org/grpc"
)

type App struct {
	ctx context.Context

	gs   *grpc.Server
	rs   *http.Server
	conf *viper.Viper

	startHooks []func()

	mu sync.Mutex
}

func New() *App {
	app := &App{
		ctx: context.Background(),
	}

	cfg := conf.Load()

	app.conf = cfg

	return app
}

// app construct hook
func (app *App) OnStart(hook func()) {
	app.startHooks = append(app.startHooks, hook)
}

func (app *App) Run() {
	app.runStartHooks(app.ctx)

	fmt.Println("appliaction run start")

	app.runStartShutdown(app.ctx)
}

func (app *App) Shutdown(ctx context.Context) error {
	fmt.Println("appliaction run stop")

	return nil
}

func (app *App) runStartHooks(ctx context.Context) error {
	for _, hook := range app.startHooks {
		hook()
	}

	return nil
}

func (app *App) runStartShutdown(ctx context.Context) error {

	app.runStartHooks(ctx)

	err := app.Shutdown(ctx)
	if err != nil {
		return err
	}

	return nil
}
