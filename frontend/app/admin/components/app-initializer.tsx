"use client"

import { DirectionProvider, ToastProvider, TooltipProvider } from "@kairo/shadcn-semi"
import type { Direction } from "@kairo/shadcn-semi"
import { PropsWithChildren } from "react"

export default function AppInitializer({ children, dir }: PropsWithChildren<{ dir: Direction }>) {
    return (
        <DirectionProvider direction={dir}>
            <ToastProvider>
                <TooltipProvider>{children}</TooltipProvider>
            </ToastProvider>
        </DirectionProvider>
    )
}
