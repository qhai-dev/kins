"use client";

import { PropsWithChildren } from "react";

import {
  DirectionProvider,
  ToastProvider,
  TooltipProvider,
} from "@kairo/shadcn-semi";
import type { Direction } from "@kairo/shadcn-semi";

import NextThemeProvider from "@/contexts/next-theme-context";
import TanstackQueryProvider from "@/contexts/tanstack-query-context";

export default function AppInitializer({
  children,
  dir,
}: PropsWithChildren<{ dir: Direction }>) {
  return (
    <NextThemeProvider>
      <TanstackQueryProvider>
        <DirectionProvider direction={dir}>
          <ToastProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </ToastProvider>
        </DirectionProvider>
      </TanstackQueryProvider>
    </NextThemeProvider>
  );
}
