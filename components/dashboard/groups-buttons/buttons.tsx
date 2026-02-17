'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpFromLine, FileUp } from 'lucide-react';
import { useState } from 'react';

export default function GroupsButtons() {
  const [active, setActive] = useState('informática');

  return (
    <div className='w-full h-12 flex justify-between items-center mt-2 px-2'>
      <div className='w-67 flex items-center justify-center gap-2'>
        <Button
          variant={active === 'informática' ? 'default' : 'secondary'}
          onClick={() => setActive('informática')}
          className='w-30.5 h-8.5 rounded-lg'
        >
          Informática
        </Button>

        <Button
          variant={active === 'electronica' ? 'default' : 'secondary'}
          onClick={() => setActive('electronica')}
          className='w-30.5 h-8.5 rounded-lg'
        >
          Electronica
        </Button>
      </div>

      <div className='w-auto flex items-center justify-center gap-2'>
        <Button className='w-28 h-11'>
          Publish
          <ArrowUpFromLine />
        </Button>
        <Button variant={'outline'} className='w-34 h-10.5 border-2'>
          Assign Mentors
        </Button>
        <Button variant={'outline'} className='w-28 h-10.5 border-2'>
          Export
          <FileUp />
        </Button>
      </div>
    </div>
  );
}
