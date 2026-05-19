package conf

import "github.com/spf13/viper"

const (
	defaultConfPath = "./application.yaml"
)

func Load() *viper.Viper {
	v := viper.New()

	v.SetConfigFile(defaultConfPath)
	if err := v.ReadInConfig(); err != nil {
		panic(err)
	}

	return v
}
