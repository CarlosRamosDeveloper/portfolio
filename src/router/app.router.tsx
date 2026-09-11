import { createBrowserRouter, Navigate } from 'react-router';

import { PorfolioLayout } from '@/portfolio/layout/PorfolioLayout';
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  LandingPage,
  SoftSkillsPage,
} from '@/portfolio/pages';
import { EducationPage } from '@/portfolio/pages/education/EducationPage';
import { ROUTES } from '@/constants/routes';
import { ProjectsLayout } from '@/projects/layout/ProjectsLayout';
import { ProjectPage, ProjectsPage, SearchPage } from '@/projects/pages';
import { FeaturedPage } from '@/projects/pages/featured/FeaturedPage';

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
      {
        path: ROUTES.softSkills,
        element: <SoftSkillsPage />,
      },
    ],
  },
  {
    path: ROUTES.projects,
    element: <ProjectsLayout />,
    children: [
      { path: ROUTES.projects, element: <ProjectsPage /> },
      {
        path: ROUTES.featured,
        element: <FeaturedPage />,
      },
      { path: ROUTES.projectId, element: <ProjectPage /> },
      {
        path: ROUTES.search,
        element: <SearchPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
