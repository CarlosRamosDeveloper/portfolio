import { createBrowserRouter } from 'react-router';

import { PorfolioLayout } from '@/portfolio/layout/PorfolioLayout';
import {
  AboutPage,
  ExperiencePage,
  LandingPage,
  ProjectsPage,
} from '@/portfolio/pages';
import { EducationPage } from '@/portfolio/pages/education/EducationPage';

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
        path: '/featured',
        element: <ProjectsPage />,
      },
      {
        path: '/experience',
        element: <ExperiencePage />,
      },
      {
        path: '/education',
        element: <EducationPage />,
      },
    ],
  },
]);
