import { itemsSidebar } from '@/constants/dashboard/sidebar-items';
import { usePathname } from 'next/navigation';

export function useGetSidebarTitle() {
  const pathname = usePathname();

  const dashboardTitle = itemsSidebar.find((item) => {
    console.log(item.url);
    console.log(pathname);
    return item.url == pathname;
  });

  return {
    dashboardTitle: dashboardTitle?.title,
  };
}
