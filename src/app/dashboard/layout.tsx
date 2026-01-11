import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ThemeButton from "@/components/themeButton";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <main>
        <SidebarTrigger />
        <ThemeButton />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
