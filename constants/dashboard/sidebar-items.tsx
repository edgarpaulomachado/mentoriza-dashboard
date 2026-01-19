import { Users, LayoutDashboard, NotebookPen, ClipboardMinus, Bell } from "lucide-react"

export const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Grupos",
    url: "#",
    icon: NotebookPen,
  },
  {
    title: "Estudantes",
    url: "#",
    icon: Users,
  },
  {
    title: "Mentores",
    url: "/dashboard/mentors",
    icon: Users,
  },
  {
    title: "Reportes",
    url: "#",
    icon: ClipboardMinus,
  },
  {
    title: "Notificações",
    url: "#",
    icon: Bell,
  }
]