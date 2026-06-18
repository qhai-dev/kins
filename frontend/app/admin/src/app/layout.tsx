import { PropsWithChildren } from "react"

import {
    TanstackQueryProvider,
    NextIntlProvider,
    NextThemesProvider,
    ShadcnProvider,
} from "./_providers"

import "./globals.css"

export async function RootLayout({ children }: PropsWithChildren) {
    const locale = "zh-CN"
    const dir = "lrt"

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <body className="h-full w-full overflow-hidden select-auto">
                <NextIntlProvider>
                    <NextThemesProvider>
                        <TanstackQueryProvider>
                            <ShadcnProvider>{children}</ShadcnProvider>
                        </TanstackQueryProvider>
                    </NextThemesProvider>
                </NextIntlProvider>
            </body>
        </html>
    )
}
