package conf

import (
	"os"
	"time"

	"github.com/spf13/viper"

	_ "github.com/spf13/viper/remote"
)

type Configuration interface {
	Load() error
	Scan() error
	Watch() error
}

func New() *viper.Viper {
	v := viper.New()

	v.AutomaticEnv()

	os.Setenv("PORT", "8080")

	// Alternatively, you can create a new viper instance
	// var runtime_viper = viper.New()

	v.AddRemoteProvider("etcd3", "http://127.0.0.1:4001", "/config/hugo.yml")
	v.SetConfigType("yaml") // because there is no file extension in a stream of bytes, supported extensions are "json", "toml", "yaml", "yml", "properties", "props", "prop", "env", "dotenv"

	err := v.ReadRemoteConfig()
	if err != nil {
		panic(err)
	}

	go func() {
		for {
			time.Sleep(time.Second * 5) // delay after each request

			err := v.WatchRemoteConfig()
			if err != nil {

				continue
			}
		}
	}()

	return v
}
