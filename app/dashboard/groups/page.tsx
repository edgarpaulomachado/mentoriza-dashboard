'use client';

import GroupsButtons from '@/components/dashboard/groups-buttons/buttons';
import { Button } from '@/components/ui/button';
import { FileSearchCorner } from 'lucide-react';
import React from 'react';

export default function GroupsPage() {

  return (
    <div className="w-full h-dhvh flex flex-col items-center justify-start pt-4">
      <GroupsButtons />

      <div className="w-74.75 h-41.75 flex flex-col justify-center items-center mt-30">
        <FileSearchCorner className="w-10 h-10"/>

        <div className="mt-5">
          <p className="text-sm font-medium text-center">No records found</p>
          <p className="text-sm font-normal text-[#999999] text-center">There are no records available at the moment</p>
        </div>

        <Button className="w-36 h-10.5 mt-5">Generate Groups</Button>
      </div>
    </div>
  );
}
