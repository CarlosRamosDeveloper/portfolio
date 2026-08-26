import { createBrowserRouter } from 'react-router';

import { PorfolioLayout } from '@/portfolio/layout/PorfolioLayout';
import { LandingPage } from '@/portfolio/pages/LandingPage';
import { AboutPage } from '@/portfolio/pages/AboutPage';
import { ProjectsPage } from '@/portfolio/pages/ProjectsPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <PorfolioLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
    ],
  },
]);
