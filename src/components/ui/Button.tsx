import React from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

type ButtonProps<T extends React.ElementType = 'button'> = ButtonOwnProps & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | 'as'>;

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-[#a8ff3e] text-black font-semibold',
    'hover:bg-[#c4ff6e]',
    'shadow-[0_0_20px_rgba(168,255,62,0.3)]',
    'hover:shadow-[0_0_30px_rgba(168,255,62,0.5)]',
    'transition-all duration-200',
  ].join(' '),

  secondary: [
    'bg-transparent text-white font-medium',
    'border border-white/20',
    'hover:border-white/40 hover:bg-white/[0.06]',
    'transition-all duration-200',
  ].join(' '),

  ghost: [
    'bg-transparent text-white/70 font-medium',
    'hover:text-white hover:bg-white/[0.05]',
    'transition-all duration-200',
  ].join(' '),

  glass: [
    'bg-white/[0.06] text-white font-medium',
    'border border-white/[0.1]',
    'backdrop-blur-md',
    'hover:bg-white/[0.1] hover:border-white/20',
    'transition-all duration-200',
  ].join(' '),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

/**
 * Reusable button component with multiple style variants.
 * Can render as an <a> tag by passing `as="a"` and `href`.
 */
export function Button<T extends React.ElementType = 'button'>({
  variant = 'primary',
  size = 'md',
  children,
  className,
  as,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps<T>) {
  const Element: React.ElementType = as ?? 'button';

  return (
    <Element
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'font-medium leading-none select-none',
        'focus-visible:ring-2 focus-visible:ring-[#a8ff3e] focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </Element>
  );
}
