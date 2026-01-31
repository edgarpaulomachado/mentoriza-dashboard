"use client";

import DashboardCards from "@/components/dashboard/cards";
import { FileSpreadsheet, GraduationCap, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-5 px-3">
        <DashboardCards
          title="Numbers of groups"
          content="2"
          icon={Users}
          className="col-span-1"
        >
          <p className="text-xs text-green-600">1º phase</p>
          <p className="text-xs text-[#FF2056]">2º phase</p>
        </DashboardCards>

        <DashboardCards title="Student numbers" content="5" icon={Users} />

        <DashboardCards
          title="Mentors numbers"
          content="9"
          icon={GraduationCap}
        />

        <DashboardCards
          title="Reports"
          content="00"
          icon={FileSpreadsheet}
          className="col-span-1"
        >
          <p className="text-xs text-green-600">Approved</p>
          <p className="text-xs text-[#FF2056]">Failed</p>
        </DashboardCards>
      </div>
    </>
  );
}
