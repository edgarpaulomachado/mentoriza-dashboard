
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { itemsSidebar } from "@/constants/dashboard/sidebar-items";


export function DashboardSidebar() {
  return (
    <Sidebar className="w-59">
      <SidebarContent>
        <SidebarGroup className="mt-30">
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {itemsSidebar.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-53 h-12.5 rounded-sm gap-3">
                    <a href={item.url}>
                      <item.icon />
                      <span className="font-medium text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
    </Sidebar>
  )
}