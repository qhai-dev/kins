import { getRequestConfig } from "next-intl/server"

import { defaultLocale } from "./const"
import { getCookieLocale } from "./cookie"
import { getDictionary } from "./dictionaries"

export default getRequestConfig(async () => {
    const cookieLocale = await getCookieLocale()

    const locale = cookieLocale || defaultLocale

    const dict = await getDictionary(locale)
    return {
        locale,
        messages: dict,
    }
})
