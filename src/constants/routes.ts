export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  education: '/education',
  experience: '/experience',
  softSkills: '/soft-skills',
  projects: '/projects',
  featured: `/projects/featured`,
  projectId: ':idSlug',
  project: (idSlug: string) => `/projects/${idSlug}`,
  search: 'search',
};
