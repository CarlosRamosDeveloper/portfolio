import { ROUTES } from '@/constants';
import type { HamburgerNavigationItem } from '@/interfaces';

export const navigationLinksData: HamburgerNavigationItem[] = [
  {
    title: 'portfolioTitle',
    items: [
      {
        label: 'portfolioSoftSkills',
        path: ROUTES.softSkills,
      },

      {
        label: 'portfolioExperience',
        path: ROUTES.experience,
      },
      {
        label: 'portolioEducation',
        path: ROUTES.education,
      },
      {
        label: 'portfolioAbout',
        path: ROUTES.about,
      },
      {
        label: 'portfolioContact',
        path: ROUTES.contact,
      },
    ],
  },
  {
    title: 'projectsTitle',
    items: [
      {
        label: 'projectsAllProjects',
        path: ROUTES.projects,
      },
      {
        label: 'projectsFeatured',
        path: ROUTES.featured,
      },
      {
        label: 'projectsSearch',
        path: ROUTES.search,
      },
    ],
  },
] as const;
