import React from "react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Users",
    href: "/dashboard/users",
  },
  {
    title: "Classes",
    href: "/dashboard/classes",
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
  },
  {
    title: "Exams",
    href: "/dashboard/exams",
  },
  {
    title: "Points",
    href: "/dashboard/points",
  },
];

const SidebarDashboard = ({ activeItem }: { activeItem: string }) => {
  console.log(activeItem);

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="border-b-4 m-1">
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-4 items-center">
            <Avatar className="h-9 w-9 rounded-lg">
              <AvatarFallback className="bg-primary text-primary-foreground rounded-lg">
                EA
              </AvatarFallback>
            </Avatar>
            <span className="text-base font-semibold">Educ App</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>
            <span className="">Overview</span>
          </SidebarGroupLabel> */}
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              <SidebarMenuItem className="space-y-2">
                {items.map((item) => (
                  <SidebarMenuButton
                    key={item.title}
                    isActive={activeItem === item.href}
                  >
                    <Link href={item.href} className="w-full">
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                ))}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenu>
            <SidebarMenuItem className="flex gap-2 items-center">
              <Avatar className="w-9 h-9 rounded-lg">
                <AvatarFallback className="bg-primary text-primary-foreground rounded-lg">
                  TS
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Nama</span>
                <span className="truncate text-xs">Username</span>
              </div>
              <Button variant="ghost">
                <LogOut className="ml-auto size-6" />
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarDashboard;
