"use server"

import { cookies } from "next/headers"

import { Locale } from "./dictionaries"

export async function getCookieLocale(): Promise<Locale> {
    const store = await cookies()
    return (store.get("locale")?.value as Locale) || "zh-CN"
}

export async function setCookieLocale(locale: Locale) {
    const store = await cookies()
    store.set("locale", locale)
}
