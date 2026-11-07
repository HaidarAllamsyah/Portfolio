import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RouteTransitionLayout } from './RouteTransitionLayout';

declare const __PORTFOLIO_STANDALONE__: boolean;

// Lazy-load pages for better performance
const HomePage        = lazy(() => import('../pages/HomePage'));
const ProjectsPage    = lazy(() => import('../pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
const AboutPage       = lazy(() => import('../pages/AboutPage'));
const ExperiencePage  = lazy(() => import('../pages/ExperiencePage'));
const ContactPage     = lazy(() => import('../pages/ContactPage'));
const NotFoundPage    = lazy(() => import('../pages/NotFoundPage'));

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#a8ff3e]/20 border-t-[#a8ff3e] rounded-full animate-spin" />
        <span className="text-white/30 text-sm">Loading…</span>
      </div>
    </div>
  );
}

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

const routes = [
  {
    element: <RouteTransitionLayout />,
    children: [
      { path: '/', element: withSuspense(<HomePage />) },
      { path: '/projects', element: withSuspense(<ProjectsPage />) },
      { path: '/projects/:slug', element: withSuspense(<ProjectDetailPage />) },
      { path: '/about', element: withSuspense(<AboutPage />) },
      { path: '/experience', element: withSuspense(<ExperiencePage />) },
      { path: '/contact', element: withSuspense(<ContactPage />) },
      { path: '*', element: withSuspense(<NotFoundPage />) },
    ],
  },
];

export const router = __PORTFOLIO_STANDALONE__
  ? createHashRouter(routes)
  : createBrowserRouter(routes);
