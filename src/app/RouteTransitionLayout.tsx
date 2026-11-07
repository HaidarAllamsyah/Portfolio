import { useEffect } from 'react';
import { useLocation, useOutlet, ScrollRestoration } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';

export function RouteTransitionLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Haidar Allamsyah — 3D Artist / 3D Generalist',
      '/projects': 'Projects — Haidar Allamsyah',
      '/about': 'About — Haidar Allamsyah',
      '/experience': 'Experience — Haidar Allamsyah',
      '/contact': 'Contact — Haidar Allamsyah',
    };
    const projectSlug = location.pathname.startsWith('/projects/')
      ? location.pathname.slice('/projects/'.length)
      : '';
    const project = projectSlug ? getProjectBySlug(projectSlug) : undefined;
    document.title = project
      ? `${project.title} — Haidar Allamsyah`
      : projectSlug
        ? 'Project Not Found — Haidar Allamsyah'
        : titles[location.pathname] ?? 'Page Not Found — Haidar Allamsyah';
  }, [location.pathname]);

  return (
    <>
      <ScrollRestoration />
      <motion.div
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {outlet}
      </motion.div>
    </>
  );
}
