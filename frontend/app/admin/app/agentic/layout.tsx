"use client"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarInset,
	SidebarProvider,
} from "@kairo/shadcn-semi"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider>
			<Sidebar variant="inset">
				<SidebarHeader>siderbar header</SidebarHeader>
				<SidebarContent>
					<div>新建任务</div>
					<div>技能</div>
					<div>专家</div>
					<div>应用</div>
				</SidebarContent>
				<SidebarFooter>siderbar footer</SidebarFooter>
			</Sidebar>
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	)
}
