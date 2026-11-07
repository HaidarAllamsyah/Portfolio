import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  as?: React.ElementType;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Reusable glass card surface with backdrop blur, translucent border,
 * and optional hover effects.
 */
export function GlassCard({
  children,
  className,
  hover = false,
  onClick,
  as: Tag = 'div',
  padding = 'md',
}: GlassCardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <Tag
      className={cn(
        'glass-card',
        hover && [
          'transition-all duration-300',
          'hover:border-white/[0.14] hover:bg-white/[0.07]',
          'hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(168,255,62,0.08)]',
          'hover:-translate-y-1',
        ].join(' '),
        onClick && 'cursor-pointer',
        paddingClasses[padding],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}
