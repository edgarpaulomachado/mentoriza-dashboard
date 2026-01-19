import { cn } from '@/lib/utils';
import Image from 'next/image';

type LogoProps = {
  isPrimary?: boolean;

  size?: 'sm' | 'md' | 'lg';

  className?: string;
};

export function Logo({ isPrimary = false, size = 'md', className }: LogoProps) {
  const sizes = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  return (
    <div
      className={cn(
        'flex items-center gap-2',
        isPrimary && 'font-semibold',
        className
      )}
    >
      <Image
        src='/logo.svg'
        alt='Logo'
        width={sizes[size]}
        height={sizes[size]}
        priority={isPrimary}
      />

      {isPrimary && <span className='text-lg tracking-tight'>Mentoriza</span>}
    </div>
  );
}
