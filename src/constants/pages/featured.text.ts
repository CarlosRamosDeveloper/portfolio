import type { FeaturedNavigationItemType } from '@/interfaces';

export const FEATURED_TEXT = {
  title: 'Proyectos Destacados',
};

export const FEATURED_PROJECT_NAVIGATION_TYPE_TEXT: Record<
  FeaturedNavigationItemType,
  string
> = {
  page: 'Ver el proyecto al detalle',
  repository: 'Acceder al repositorio',
  demo: 'Ver demo',
};
