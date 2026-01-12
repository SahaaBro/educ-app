"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ThemeButton from "@/components/themeButton";
import SidebarDashboard from "@/components/pages/dashboard/sidebarDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <SidebarDashboard activeItem={pathname} />
      <main className="w-full bg-background m-3">
        <div className="flex items-center justify-between pb-2 border-b-2">
          <SidebarTrigger />
          <ThemeButton />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
