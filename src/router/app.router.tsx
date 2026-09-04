import { createBrowserRouter } from 'react-router';

import { PorfolioLayout } from '@/portfolio/layout/PorfolioLayout';
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  FeaturedPage,
  LandingPage,
} from '@/portfolio/pages';
import { EducationPage } from '@/portfolio/pages/education/EducationPage';
import { ROUTES } from '@/constants/routes';

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <PorfolioLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: ROUTES.about,
        element: <AboutPage />,
      },
      {
        path: ROUTES.featured,
        element: <FeaturedPage />,
      },
      {
        path: ROUTES.experience,
        element: <ExperiencePage />,
      },
      {
        path: ROUTES.education,
        element: <EducationPage />,
      },
      {
        path: ROUTES.contact,
        element: <ContactPage />,
      },
    ],
  },
]);
