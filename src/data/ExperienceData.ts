import { TECHNOLOGIES } from '@/constants';
import type { JobExperience } from '@/interfaces';

export const ExperienceData = [
  {
    id: 1,
    company: 'Soluciones 480',
    startYear: 2021,
    endYear: 2022,
    techStack: [
      TECHNOLOGIES.flutter,
      TECHNOLOGIES.java,
      TECHNOLOGIES.mysql,
      TECHNOLOGIES.jira,
      TECHNOLOGIES.gitlab,
      TECHNOLOGIES['git-flow'],
    ],
    isInternship: true,
  },
  {
    id: 2,
    company: 'Fujitsu',
    startYear: 2023,
    endYear: 2024,
    techStack: [
      TECHNOLOGIES['spring-boot'],
      TECHNOLOGIES.java,
      TECHNOLOGIES.react,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.mysql,
      TECHNOLOGIES.gitlab,
      TECHNOLOGIES.subversion,
    ],
  },
  {
    id: 3,
    company: 'BorealOS',
    startYear: 2026,
    endYear: 2026,
    techStack: [
      TECHNOLOGIES.vue,
      TECHNOLOGIES.symfony,
      TECHNOLOGIES['react-native'],
      TECHNOLOGIES.docker,
      TECHNOLOGIES.opencode,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.php,
      TECHNOLOGIES.bitbucket,
      TECHNOLOGIES['git-flow'],
      TECHNOLOGIES.odoo,
    ],
    isInternship: true,
  },
] satisfies Omit<
  JobExperience,
  'workingPosition' | 'subtitle' | 'description'
>[];
