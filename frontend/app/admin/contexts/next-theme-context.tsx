"use client"
import { ThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"

export default function NextThemeProvider({ children }: PropsWithChildren) {
	return (
		<ThemeProvider
			defaultTheme="system"
			attribute="data-theme"
			enableSystem
			disableTransitionOnChange
			enableColorScheme={false}
		>
			{children}
		</ThemeProvider>
	)
}
