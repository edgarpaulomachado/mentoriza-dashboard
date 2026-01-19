import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import DashboardHeader from '@/components/dashboard/header';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className='w-full min-h-dvh'>
        <DashboardHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
