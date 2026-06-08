"use client";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

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
  );
}
