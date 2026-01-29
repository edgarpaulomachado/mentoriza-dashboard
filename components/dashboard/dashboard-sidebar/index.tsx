"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserIcon, ChevronDown } from "lucide-react";

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
} from "@/components/ui/sidebar";

import { Logo } from "@/components/logo";
import { itemsSidebar } from "@/constants/dashboard/sidebar-items";
import { cn } from "@/lib/utils";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarHeader>
          <Logo isPrimary />
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>

          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {itemsSidebar.map((item) => {
                const hasChildren = !!item.children;

                const isParentActive = hasChildren
                  ? item.children!.some((child) =>
                      pathname.startsWith(child.url),
                    )
                  : pathname === item.url ||
                    (item.url !== "/dashboard" &&
                      pathname.startsWith(item.url!));

                const isOpen = openMenu === item.title || isParentActive;

                if (hasChildren) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        onClick={() => setOpenMenu(isOpen ? null : item.title)}
                        className={cn(
                          "h-12.5 rounded-sm gap-3 font-medium justify-between",
                          isParentActive
                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5" />
                          <span className="text-sm">{item.title}</span>
                        </div>

                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isOpen && "rotate-180",
                          )}
                        />
                      </SidebarMenuButton>

                      {isOpen && (
                        <div className="ml-8 mt-2 space-y-1">
                          {item.children!.map((child) => {
                            const isActive = pathname === child.url;

                            return (
                              <SidebarMenuButton
                                key={child.title}
                                asChild
                                className={cn(
                                  "h-10 gap-3 rounded-sm",
                                  isActive
                                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                    : "text-sidebar-foreground hover:bg-sidebar-accent",
                                )}
                              >
                                <Link href={child.url}>
                                  {child.icon && (
                                    <child.icon className="h-4 w-4" />
                                  )}
                                  <span className="text-sm">{child.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            );
                          })}
                        </div>
                      )}
                    </SidebarMenuItem>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "h-12.5 rounded-sm gap-3 transition-colors font-medium",
                        isParentActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <Link href={item.url!}>
                        <item.icon className="h-5 w-5" />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="w-full gap-3">
              <Link href="/my-profile">
                <UserIcon className="h-5 w-5" />
                <span>Meu Perfil</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
