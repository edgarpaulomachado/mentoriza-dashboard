import { ReactNode } from 'react';

interface GroupBoardProps {
  children: ReactNode;
}

export default function GroupsBoard({ children }: GroupBoardProps) {
  return (
    <div className='gap-4 flex flex-row w-300 overflow-x-scroll pt-4  '>
      {children}
    </div>
  );
}
