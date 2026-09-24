export const projects = {
  items: {
    1: {
      name: 'Browser RPG',
      shortDescription: 'Browser game developed as a final DAW project',
      description: [
        'A single-screen game whose interface changes based on the user’s choices',
        'The project could run standalone in the browser, storing data in localStorage',
        'A class project that got out of hand and grew beyond its original scope',
        'Every now and then I feel like remaking it with React using the knowledge I have now',
      ],
    },
    2: {
      name: 'Monster Hunter Rise Comparator',
      shortDescription:
        'A damage calculator and comparison tool for Monster Hunter Rise',
      description: [
        'Allows damage calculations while taking different skill combinations into account',
        'Takes critical hit and weak spot hit chances into account',
        'Takes skills that increase damage and critical hit chance into account',
        'Includes a theme selector inspired by four creatures from the series',
      ],
    },
    3: {
      name: 'Terminal Trivia',
      shortDescription: 'A simple terminal-based trivia game',
      description: [
        'Started as a project to teach Java to a friend',
        'The list of questions and answers is shuffled with each new attempt',
        'Since it was intended to be a simple project, it does not use a database or Docker',
      ],
    },
    4: {
      name: 'Escape From Purgatory',
      shortDescription: '2D Metroidvania video game',
      description: [
        'Progression system based on Power-Ups that unlock new abilities',
        'Backtracking system based on the abilities acquired throughout the progression',
        'Designed and structured the levels around the player progression system',
        'Designed and balanced the mechanics of the playable character, enemies, and bosses',
        'Actively participated in the development of the project in addition to management responsibilities',
        'Developed by a team of 3 people',
        'Project management and team coordination using Jira',
        'Version control using Bitbucket following the Gitflow methodology',
      ],
    },
    5: {
      name: 'Chests, Please',
      shortDescription:
        '3D game inspired by Papers, Please, set in the customs office of a medieval city',
      description: [
        'Procedural NPC generation',
        'Consequence system based on the player’s decisions and actions',
        'Dynamic economy system in which the number of NPCs and merchants present in the city directly affects its economy',
        'Goods inspection system',
        'Bribery system that allows the player to accept payments in exchange for allowing certain NPCs to enter the city',
        'Weather system that modifies the city’s fuel consumption based on weather conditions',
        'Crime system in which certain NPCs can make other characters disappear, including the player’s family members and even the player themselves',
        'Family system that allows the player to keep track of their family members. If all of them disappear or die, the game ends',
        'Implementation of 9 different endings based on the player’s decisions',
        'Developed by a team of 4 people',
        'Actively participated in the development of the project in addition to management responsibilities',
        'Project management and team coordination using Jira',
        'Version control using Bitbucket following the Gitflow methodology',
      ],
    },
    6: {
      name: 'PasswordAppManager',
      shortDescription:
        'Android application for password generation and management',
      description: [
        'Allows passwords to be generated according to different criteria',
        'Encrypted password storage',
        'Allows multiple accounts to be associated with the same application',
        'Password scoring algorithm based on different characters, repeated patterns, password length, and other factors',
      ],
    },
    7: {
      name: 'Proyecto Decisiones',
      shortDescription:
        'REST API for a decision-based RPG, with MySQL persistence and Spring Boot',
      description: [
        'Backend developed with Kotlin and Spring Boot for a decision-based RPG',
        'The application manages users, characters, locations, NPCs, decisions, and the choices made throughout the game',
        'The REST API was designed to be consumed by the mobile application developed by another team member, while the backend also includes a web-based administration interface using Thymeleaf',
        'The project uses a layered architecture with controllers, use cases, services, repositories, and domain entities, along with DTOs and mappers to separate persistence models from the data exposed by the API',
        'The application and database can be run using Docker Compose, including MySQL database initialization',
      ],
    },
    8: {
      name: 'Portfolio',
      shortDescription: 'Personal portfolio',
      description: [
        'Personal portfolio developed with React and TypeScript, designed not only as a presentation of my experience and projects, but also as a living project where I can experiment with and consolidate frontend development knowledge',
        'The application is designed as a modular and extensible SPA, with a structure prepared to progressively incorporate new projects, technologies, and content. Its features include navigation using React Router, project filtering by technologies, and a visual theme system',
        'Throughout the development process, I am paying particular attention to component reuse, separation of responsibilities, strict typing, and code maintainability',
        'The portfolio itself serves as a showcase of my growth as a developer and the technical decisions I incorporate as the project evolves',
        'The entire development process has been managed using GitHub Projects',
      ],
    },
  },
};
