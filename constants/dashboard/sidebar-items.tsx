import {
  Bell,
  ClipboardMinus,
  LayoutDashboard,
  NotebookPen,
  Users,
} from "lucide-react";

export const itemsSidebar = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Grupos",
    url: "/dashboard/groups",
    icon: NotebookPen,
  },
  {
    title: "Estudantes",
    url: "/dashboard/students",
    icon: Users,
  },
  {
    title: "Mentores",
    url: "/dashboard/mentors",
    icon: Users,
  },
  {
    title: "Reportes",
    url: "/dashboard/reports",
    icon: ClipboardMinus,
  },
  {
    title: "Notificações",
    url: "/dashboard/notifications",
    icon: Bell,
  },
];
