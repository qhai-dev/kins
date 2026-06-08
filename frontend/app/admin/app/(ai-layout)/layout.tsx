"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from "@kairo/shadcn-semi";
import { Bot, SquareTerminal } from "lucide-react";
import { PropsWithChildren } from "react";

import { NavMain } from "@/components/biz/nav-main";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "任务",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "会话1",
          url: "/contacts/departmentanduser",
        },
        {
          title: "会话2",
          url: "/contacts/role",
        },
        {
          title: "会话3",
          url: "/contacts/unit",
        },
        {
          title: "会话4",
          url: "/contacts/group",
        },
      ],
    },
  ],
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider className="bg-background">
      <Sidebar variant="inset">
        {/*<SidebarHeader>siderbar header</SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>siderbar footer</SidebarFooter>*/}
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
