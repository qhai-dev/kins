import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
    locales: ["zh-CN", "en-US", "ar-SA"],

    defaultLocale: "zh-CN",
})
