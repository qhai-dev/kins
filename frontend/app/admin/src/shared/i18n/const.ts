export const languages = {
    "zh-CN": {
        name: "简体中文",
        dir: "ltr",
    },
    "en-US": {
        name: "English",
        dir: "ltr",
    },
    "ar-SA": {
        name: "العربية",
        dir: "rtl",
    },
} as const

export const locales = ["zh-CN", "en-US", "ar-SA"] as const

export const defaultLocale = "zh-CN"
