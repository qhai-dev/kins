package main

import (
	"github.com/qhai-dev/galio/library/galio"
)

func main() {
	app := galio.New()

	app.OnStart(func() {
		initialize(app)
	})

	app.Run()
}
