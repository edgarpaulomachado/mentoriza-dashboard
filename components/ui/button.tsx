import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: string;
  size?: string;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md font-medium ${props.className ?? ''}`}
    >
      {children}
    </button>
  );
}
