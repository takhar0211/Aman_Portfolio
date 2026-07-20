'use client';

import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

const variantClasses = {
  primary:
    'bg-accent-blue text-white hover:bg-accent-blue-hover border border-transparent shadow-sm shadow-accent-blue/20 hover:shadow-accent-blue/30',
  secondary:
    'bg-transparent text-text-primary border border-border hover:border-text-secondary hover:bg-bg-card',
  ghost: 'bg-transparent text-text-secondary hover:text-text-primary border border-transparent',
};

/**
 * Button — reusable button component.
 * Variants: primary (filled blue), secondary (outlined), ghost (text only).
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
          'transition-all duration-200 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'cursor-pointer',
          sizeClasses[size],
          variantClasses[variant],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
