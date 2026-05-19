package main

import (
	"fmt"

	"github.com/qhai-dev/galio/library/galio"
)

func main() {
	app := galio.New()

	app.OnStart(func() {
		initialize(app)
	})

	app.OnStop(func() {
		fmt.Println("stop clearup")
	})

	app.Run()
}
