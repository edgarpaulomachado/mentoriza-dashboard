'use client';

import {
  Bell,
  ClipboardMinus,
  LayoutDashboard,
  NotebookPen,
  UserIcon,
  Users,
} from 'lucide-react';

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
} from '@/components/ui/sidebar';

import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Grupos',
    url: '/dashboard/groups',
    icon: NotebookPen,
  },
  {
    title: 'Estudantes',
    url: '/dashboard/students',
    icon: Users,
  },
  {
    title: 'Mentores',
    url: '/dashboard/mentors',
    icon: Users,
  },
  {
    title: 'Reportes',
    url: '/dashboard/reports',
    icon: ClipboardMinus,
  },
  {
    title: 'Notificações',
    url: '/dashboard/notifications',
    icon: Bell,
  },
];

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
              {items.map((item) => {
                const isActive =
                  pathname === item.url ||
                  (item.url !== '/dashboard' && pathname.startsWith(item.url));

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        'w-53 h-12.5 rounded-sm gap-3 transition-colors',
                        isActive
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      )}
                    >
                      <a href={item.url}>
                        <item.icon className='h-5 w-5' />
                        <span>{item.title}</span>
                      </a>
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
