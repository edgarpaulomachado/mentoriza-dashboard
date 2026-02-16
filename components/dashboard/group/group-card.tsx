'use client';

import AdvisorCard from '@/components/advisor/advisor-card';
import { Separator } from '@/components/ui/separator';
import { ReactNode } from 'react';
import AdvisorList from './advisor-list';
import GroupHeader from './group-header';

interface GroupCardProps {
  children: ReactNode;
}

export default function GroupCard({ children }: GroupCardProps) {
  return (
    <div className='min-w-[375px] rounded-lg bg-white border border-[#DEDEE6]'>
      <GroupHeader
        groupName={'Group 1'}
        description={'The future starts now!'}
      />
      <Separator />
      {children}
      <Separator className='mt-24' />
      <AdvisorList>
        <AdvisorCard name='Edgar Barros' role='Orientador'></AdvisorCard>
      </AdvisorList>
    </div>
  );
}
