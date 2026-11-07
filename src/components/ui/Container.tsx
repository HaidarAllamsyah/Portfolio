import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Reusable page container with consistent max-width and horizontal padding.
 */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('container-custom', className)}>
      {children}
    </Tag>
  );
}
