import { ReactNode } from 'react';

interface GroupMemberListProps {
  children: ReactNode;
}

export default function GroupMemberList({ children }: GroupMemberListProps) {
  return <div className='flex flex-col gap-3 p-2 pt-3'>{children}</div>;
}
