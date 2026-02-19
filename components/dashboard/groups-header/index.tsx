'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpFromLine, FileUp } from 'lucide-react';

export default function GroupHeader() {
  return (
    <div className='w-full h-12 flex justify-between items-center mt-2'>
      <div className='flex items-center justify-center gap-2'></div>

      <div className='w-auto flex items-center justify-center gap-2'>
        <Button>
          Publish
          <ArrowUpFromLine />
        </Button>
        <Button variant={'outline'}>Assign Mentors</Button>
        <Button variant={'outline'}>
          Export
          <FileUp />
        </Button>
      </div>
    </div>
  );
}
