import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { cn } from '../../utils/cn';

const socialLinks = [
  {
    label: 'GitHub',
    href: siteConfig.social.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    icon: Instagram,
  },
  {
    label: 'Email',
    href: siteConfig.email ? `mailto:${siteConfig.email}` : '',
    icon: Mail,
  },
].filter(({ href }) => href);

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={cn(
        'site-footer',
        'relative mt-auto',
        'border-t border-white/[0.07]',
        'bg-black/10 backdrop-blur-sm'
      )}
      role="contentinfo"
    >
      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <Link
              to="/"
              className="font-bold text-white hover:text-[#a8ff3e] transition-colors text-sm"
            >
              {siteConfig.name}
              <span className="text-[#a8ff3e]">.</span>
            </Link>
            <p className="text-white/30 text-xs">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social + Back to top */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  'p-2 rounded-lg',
                  'text-white/40 hover:text-white',
                  'hover:bg-white/[0.07]',
                  'transition-all duration-200',
                  'focus-visible:ring-2 focus-visible:ring-[#a8ff3e]'
                )}
              >
                <Icon size={16} />
              </a>
            ))}

            {socialLinks.length > 0 && (
              <div className="w-px h-5 bg-white/[0.1]" aria-hidden="true" />
            )}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className={cn(
                'p-2 rounded-lg',
                'text-white/40 hover:text-[#a8ff3e]',
                'hover:bg-[#a8ff3e]/10',
                'transition-all duration-200',
                'focus-visible:ring-2 focus-visible:ring-[#a8ff3e]'
              )}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
