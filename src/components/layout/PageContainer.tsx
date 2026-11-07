import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps every page with the navbar and footer.
 * Ensures consistent layout across all routes.
 */
export function PageContainer({ children, className, style }: PageContainerProps) {
  return (
    <div className={`site-light-theme relative flex min-h-screen min-h-[100svh] flex-col ${className ?? ''}`} style={style}>
      <Navbar />
      <main className="relative z-10 flex-1 pt-16 md:pt-[4.5rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
