import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { LayoutGroup, MotionConfig } from 'framer-motion';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup id="portfolio-project-entry">
        <RouterProvider router={router} />
      </LayoutGroup>
    </MotionConfig>
  );
}
