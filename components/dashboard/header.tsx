'use client';

import { useGetSidebarTitle } from '@/hooks/dashboard/use-get-sidebar-title';

export default function DashboardHeader() {
  const { dashboardTitle } = useGetSidebarTitle();
  return (
    <header className='w-full h-18 flex justify-between items-center'>
      <h1>{dashboardTitle}</h1>
    </header>
  );
}
