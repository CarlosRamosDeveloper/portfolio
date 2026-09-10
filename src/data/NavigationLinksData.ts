import { ROUTES } from '@/constants';
import { NAVIGATION_LINKS_LABEL } from '@/constants/navigation-links.label';
import type { HamburgerNavigationItem } from '@/interfaces';

export const navigationLinksData: HamburgerNavigationItem[] = [
  {
    title: NAVIGATION_LINKS_LABEL.portfolioTitle,
    items: [
      {
        label: NAVIGATION_LINKS_LABEL.portfolioAbout,
        path: ROUTES.about,
      },
      {
        label: NAVIGATION_LINKS_LABEL.portfolioExperience,
        path: ROUTES.experience,
      },
      {
        label: NAVIGATION_LINKS_LABEL.portolioEducation,
        path: ROUTES.education,
      },
      {
        label: NAVIGATION_LINKS_LABEL.portfolioContact,
        path: ROUTES.contact,
      },
      {
        label: NAVIGATION_LINKS_LABEL.portfolioSoftSkills,
        path: ROUTES.softSkills,
      },
    ],
  },
  {
    title: NAVIGATION_LINKS_LABEL.projectsTitle,
    items: [
      {
        label: NAVIGATION_LINKS_LABEL.projectsAllProjects,
        path: ROUTES.projects,
      },
      {
        label: NAVIGATION_LINKS_LABEL.projectsFeatured,
        path: ROUTES.featured,
      },
      {
        label: NAVIGATION_LINKS_LABEL.projectsSearch,
        path: ROUTES.search,
      },
    ],
  },
];
