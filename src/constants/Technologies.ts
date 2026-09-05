import type { TechId, Technology } from '@/interfaces';

export const TECHNOLOGIES: Record<TechId, Technology | undefined> = {
  android: {
    name: 'Android',
    category: 'platform',
    areas: ['mobile'],
  },
  angular: {
    name: 'Angular',
    category: 'framework',
    areas: ['frontend'],
  },
  aws: {
    name: 'AWS',
    category: 'platform',
    areas: ['backend', 'devops'],
  },
  bitbucket: {
    name: 'Bitbucket',
    category: 'tool',
    areas: ['general', 'devops'],
  },
  bootstrap: {
    name: 'Bootstrap',
    category: 'library',
    areas: ['frontend'],
  },
  'c-sharp': {
    name: 'C#',
    category: 'language',
    areas: ['backend', 'game-development'],
  },
  css: {
    name: 'CSS',
    category: 'markup',
    areas: ['frontend'],
  },
  docker: {
    name: 'Docker',
    category: 'tool',
    areas: ['devops', 'general'],
  },
  'dot-net': {
    name: '.NET',
    category: 'framework',
    areas: ['backend'],
  },
  flutter: {
    name: 'Flutter',
    category: 'framework',
    areas: ['mobile', 'frontend'],
  },
  git: {
    name: 'Git',
    category: 'version-control',
    areas: ['devops', 'general'],
  },
  'git-flow': {
    name: 'Git Flow',
    category: 'version-control',
    areas: ['general'],
  },
  gitlab: {
    name: 'GitLab',
    category: 'version-control',
    areas: ['devops', 'general'],
  },
  html: {
    name: 'HTML',
    category: 'markup',
    areas: ['frontend'],
  },
  java: {
    name: 'Java',
    category: 'language',
    areas: ['backend'],
  },
  javascript: {
    name: 'JavaScript',
    category: 'language',
    areas: ['backend', 'frontend', 'mobile'],
  },
  'jetpack-compose': {
    name: 'Jetpack Compose',
    category: 'ui-toolkit',
    areas: ['mobile'],
  },
  jira: {
    name: 'Jira',
    category: 'tool',
    areas: ['general'],
  },
  jquery: {
    name: 'jQuery',
    category: 'library',
    areas: ['frontend'],
  },
  kotlin: {
    name: 'Kotlin',
    category: 'language',
    areas: ['backend', 'mobile'],
  },
  mongodb: {
    name: 'MongoDB',
    category: 'database',
    areas: ['database-non-relational', 'backend'],
  },
  mysql: {
    name: 'MySQL',
    category: 'database',
    areas: ['database-relational', 'backend'],
  },
  nestjs: {
    name: 'Nest.js',
    category: 'framework',
    areas: ['backend'],
  },
  nodejs: {
    name: 'Node.js',
    category: 'platform',
    areas: ['backend'],
  },
  odoo: {
    name: 'Odoo',
    category: 'erp',
    areas: ['general'],
  },
  opencode: {
    name: 'OpenCode',
    category: 'tool',
    areas: ['general'],
  },
  php: {
    name: 'PHP',
    category: 'language',
    areas: ['backend'],
  },
  postgresql: {
    name: 'PostgreSQL',
    category: 'database',
    areas: ['database-relational', 'backend'],
  },
  'react-native': {
    name: 'React Native',
    category: 'framework',
    areas: ['mobile'],
  },
  react: {
    name: 'React',
    category: 'library',
    areas: ['frontend'],
  },
  room: {
    name: 'Room',
    category: 'database',
    areas: ['database-relational', 'mobile'],
  },
  'spring-boot': {
    name: 'Spring Boot',
    category: 'framework',
    areas: ['backend'],
  },
  sqlite: {
    name: 'SQLite',
    category: 'database',
    areas: ['database-relational', 'backend', 'mobile'],
  },
  subversion: {
    name: 'Subversion',
    category: 'version-control',
    areas: ['general'],
  },
  symfony: {
    name: 'Symfony',
    category: 'framework',
    areas: ['backend'],
  },
  typescript: {
    name: 'TypeScript',
    category: 'language',
    areas: ['backend', 'frontend', 'mobile'],
  },
  unity: {
    name: 'Unity',
    category: 'game-engine',
    areas: ['game-development'],
  },
  vue: {
    name: 'Vue',
    category: 'framework',
    areas: ['frontend'],
  },
  wordpress: {
    name: 'WordPress',
    category: 'cms',
    areas: ['general'],
  },
  xml: {
    name: 'XML',
    category: 'markup',
    areas: ['general'],
  },
  zustand: {
    name: 'Zustand',
    category: 'state-management',
    areas: ['frontend'],
  },
};
