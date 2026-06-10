"use client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function NextThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
