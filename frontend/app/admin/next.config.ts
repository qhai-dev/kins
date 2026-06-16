import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin({
    requestConfig: "./src/shared/i18n/request.ts",
})

export default withNextIntl({
    output: "standalone",
})
