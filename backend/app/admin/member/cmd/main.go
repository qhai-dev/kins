package main

import "github.com/qhai-dev/kairo/library/framework"

func main() {
	app := framework.New(
		framework.Name("admin.member"),
		framework.Version("v1.0.0"),
	)

	app.Run()
}
