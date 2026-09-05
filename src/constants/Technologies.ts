import type { TechId } from '@/interfaces/TechId';
import type { Technology } from '@/interfaces/Technology';

export const TECHNOLOGIES: Record<TechId, Technology> = {
  angular: {
    name: 'Angular',
    category: 'framework',
    areas: ['frontend'],
  },
  zustand: {
    name: 'Zustand',
    category: 'state-management',
    areas: ['frontend'],
  },
};
