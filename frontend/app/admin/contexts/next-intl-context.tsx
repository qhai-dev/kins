import { NextIntlClientProvider } from "next-intl"
import { PropsWithChildren } from "react"

export default function NextIntlProvider({ children }: PropsWithChildren) {
	return <NextIntlClientProvider>{children}</NextIntlClientProvider>
}
