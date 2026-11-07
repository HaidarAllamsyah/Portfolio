import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/site';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [menuOpenForPath, setMenuOpenForPath] = useState<string | null>(null);
  const menuOpen = menuOpenForPath === location.pathname;

  // Detect scroll
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          'site-navbar',
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-500',
          scrolled
            ? 'backdrop-blur-xl bg-black/70 border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent'
        )}
        role="banner"
      >
        <div className="container-custom">
          <nav
            className="flex items-center justify-between h-16 md:h-18"
            aria-label="Main navigation"
          >
            {/* Logo / Wordmark */}
            <Link
              to="/"
              className="group flex items-center gap-2 font-bold text-white select-none focus-visible:outline-none"
              aria-label={`${siteConfig.name} — Home`}
            >
              <span className="w-7 h-7 rounded-lg bg-[#a8ff3e] flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 shrink-0">
                <span className="text-black text-xs font-black leading-none">HA</span>
              </span>
              <span className="text-sm font-semibold tracking-wide hidden sm:block">
                {siteConfig.firstName}
                <span className="text-[#a8ff3e]">.</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    className={({ isActive }) =>
                      cn(
                        'relative px-4 py-2 text-sm font-medium rounded-lg',
                        'transition-all duration-200',
                        'focus-visible:ring-2 focus-visible:ring-[#a8ff3e]',
                        isActive
                          ? 'text-[#a8ff3e]'
                          : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#a8ff3e] rounded-full"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className={cn(
                  'hidden md:inline-flex items-center gap-1.5',
                  'px-4 py-2 text-sm font-semibold rounded-lg',
                  'bg-[#a8ff3e] text-black',
                  'hover:bg-[#c4ff6e]',
                  'transition-colors duration-200',
                  'shadow-[0_0_16px_rgba(168,255,62,0.3)]',
                  'focus-visible:ring-2 focus-visible:ring-[#a8ff3e] focus-visible:ring-offset-2 focus-visible:ring-offset-black'
                )}
              >
                Let's talk
              </Link>

              {/* Mobile menu button */}
              <button
                className={cn(
                  'md:hidden p-2 rounded-lg',
                  'text-white/70 hover:text-white hover:bg-white/[0.07]',
                  'transition-colors duration-200',
                  'focus-visible:ring-2 focus-visible:ring-[#a8ff3e]'
                )}
                onClick={() => setMenuOpenForPath(menuOpen ? null : location.pathname)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpenForPath(null)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu"
              key="panel"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={cn(
                'fixed top-0 right-0 bottom-0 z-50',
                'w-72 max-w-[85vw]',
                'liquid-glass-panel border-l border-white/[0.08]',
                'flex flex-col p-6'
              )}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-semibold text-white/60">Navigation</span>
                <button
                  onClick={() => setMenuOpenForPath(null)}
                  className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.07] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-1" role="list">
                {siteConfig.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === '/'}
                      onClick={() => setMenuOpenForPath(null)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium',
                          'transition-all duration-200',
                          isActive
                            ? 'text-[#a8ff3e] bg-[#a8ff3e]/10'
                            : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-white/[0.07]">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpenForPath(null)}
                  className={cn(
                    'flex items-center justify-center',
                    'w-full px-6 py-3 rounded-xl',
                    'bg-[#a8ff3e] text-black font-semibold text-sm',
                    'hover:bg-[#c4ff6e] transition-colors'
                  )}
                >
                  Let's talk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
