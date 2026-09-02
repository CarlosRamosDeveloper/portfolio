import type { Project } from '@/interfaces/Project';

export const ProjectsData: Project[] = [
  {
    id: 0,
    name: '',
    shortDescription: '',
    description: [],
    isFeatured: false,
    status: 'design',
    techStack: [],
    repository: '',
    screenshots: [],
    url: null,
    video: null,
  },
  {
    id: 1,
    name: 'PasswordAppManager',
    shortDescription:
      'Aplicación android para generación y gestión de contraseñas',
    description: ['Linea de prueba', 'lorem', 'ipsum'],
    isFeatured: true,
    status: 'work_in_progress',
    techStack: ['Android', 'Kotlin'],
    repository: 'https://github.com/CarlosRamosDeveloper/PasswordManagerApp',
    screenshots: [
      'https://placehold.co/600x400/000000/FFFFFF/png',
      'https://placehold.co/600x400/000000/FFFFFF/png',
      'https://placehold.co/600x400/000000/FFFFFF/png',
    ],
    url: null,
    video: null,
  },
];
