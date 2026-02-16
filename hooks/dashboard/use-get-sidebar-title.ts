import { itemsSidebar } from '@/constants/dashboard/sidebar-items';
import { usePathname } from 'next/navigation';

export function useGetSidebarTitle() {
  const pathname = usePathname();

  let dashboardTitle: string | undefined;

  itemsSidebar.forEach((item) => {
    if (item.url === pathname) {
      dashboardTitle = item.title;
    }

    if (item.children) {
      item.children.forEach((child) => {
        if (child.url === pathname) {
          dashboardTitle = child.title;
        }
      });
    }
  });

  return {
    dashboardTitle,
  };
}
