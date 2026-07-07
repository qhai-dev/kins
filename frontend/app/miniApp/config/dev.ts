import type { UserConfigExport } from "@tarojs/cli"

export default {
    logger: {
        quiet: false,
        stats: true,
    },
    mini: {},
} satisfies UserConfigExport<"webpack5">
