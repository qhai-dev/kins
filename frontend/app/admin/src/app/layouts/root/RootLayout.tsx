import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { PropsWithChildren } from "react"

import { routing, languages } from "@/shared/i18n"

import "../../styles/index.css"
import { TanstackQueryProvider, NextIntlProvider, NextThemesProvider } from "../../provider"

export async function RootLayout({
    children,
    params,
}: PropsWithChildren<{
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    setRequestLocale(locale)
    const dir = languages[locale]?.dir

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <body className="h-full overflow-hidden select-auto">
                <NextIntlProvider>
                    <NextThemesProvider>
                        <TanstackQueryProvider>{children}</TanstackQueryProvider>
                    </NextThemesProvider>
                </NextIntlProvider>
            </body>
        </html>
    )
}
