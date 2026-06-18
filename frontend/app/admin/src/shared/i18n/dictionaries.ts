const dictionaries = {
    "zh-CN": () => import("./dictionaries/zh-CN.json").then((module) => module.default),
    "en-US": () => import("./dictionaries/en-US.json").then((module) => module.default),
    "ar-SA": () => import("./dictionaries/ar-SA.json").then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
