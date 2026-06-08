package main

import (
	"github.com/qhai-dev/kairo/library/framework"
)

func main() {
	app := framework.New(
		framework.Name("service.agent"),
		framework.Version("v1.0.0"),
	)

	app.Run()
}
