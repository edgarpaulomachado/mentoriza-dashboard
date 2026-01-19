'use client';

import { useGetSidebarTitle } from '@/hooks/dashboard/use-get-sidebar-title';
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function DashboardHeader() {
  const { dashboardTitle } = useGetSidebarTitle();
  return (
    <div className='w-full h-18 flex justify-between items-center bg-gray-50 border-b px-5'>
      <h1 className='text-xl font-bold'>{dashboardTitle}</h1>

      <div className='w-61 h-10 flex items-center justify-center gap-2'>
        <Avatar className="w-11 h-10 rounded-xs">
            <AvatarFallback>SP</AvatarFallback>
        </Avatar>

        <div className="w-50 h-10">
            <p className="text-lg font-bold text-black">Sandro Panda</p>
            <p className="text-sm text-[#999999]">admin.dashboard@example.com</p>
        </div>
      </div>
    </div>
  );
}
