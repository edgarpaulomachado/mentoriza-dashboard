'use client';

import { UserIcon } from 'lucide-react';

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
} from "@/components/ui/sidebar"

import { itemsSidebar } from "@/constants/dashboard/sidebar-items";
import { Logo } from '@/components/logo';
import { usePathname } from 'next/navigation';


export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className='w-59 border-r'>
      <SidebarContent>
        <SidebarHeader>
          <Logo isPrimary></Logo>
        </SidebarHeader>
        <SidebarGroup className='mt-8'>
          {' '}
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent className='mt-4'>
            <SidebarMenu>
              {itemsSidebar.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-53 h-12.5 rounded-sm gap-3">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='w-full gap-3 '>
              <a href='/my-profile'>
                <UserIcon className='h-5 w-5' />
                <span>Meu Perfil</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
