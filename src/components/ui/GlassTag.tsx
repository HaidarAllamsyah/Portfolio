import React from 'react';
import { cn } from '../../utils/cn';

interface GlassTagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'lime' | 'muted';
  size?: 'sm' | 'md';
}

/**
 * Small tag/chip for displaying technology names, categories, etc.
 */
export function GlassTag({
  children,
  className,
  variant = 'default',
  size = 'sm',
}: GlassTagProps) {
  const variantClasses = {
    default: 'bg-white/[0.06] border-white/[0.1] text-white/70',
    lime: 'bg-[#a8ff3e]/10 border-[#a8ff3e]/30 text-[#a8ff3e]',
    muted: 'bg-white/[0.03] border-white/[0.06] text-white/40',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border font-medium backdrop-blur-sm',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
