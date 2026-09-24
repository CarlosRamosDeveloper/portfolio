export const projects = {
  items: {
    1: {
      name: 'RPG-Navegador',
      shortDescription:
        'Juego de navegador desarrollado como proyecto final de DAW',
      description: [
        'Solo con una pantalla, pero modificando la interfaz en función de las elecciones del usuario',
        'El proyecto podia funcionar de forma standalone en navegador, almacenando los datos en el localStorage',
        'Un proyecto para clase que se fue de las manos y creció sin control',
        'De vez en cuando tengo ganas de hacerle un remake con react y con los conocimientos que tengo ahora',
      ],
    },
    2: {
      name: 'Monster Hunter Rise Comparator',
      shortDescription: 'Un comparador para el videojuego MHR',
      description: [
        'Permite el cálculo de daño teniendo en cuenta las diferentes opciones de habilidades',
        'Tiene en cuenta el porcentaje de golpe crítico y golpe débil',
        'Tiene en cuenta las habilidades que incrementan el daño y el golpe crítico',
        'Cuenta con selector de temas, inspirado en 4 criaturas de la saga',
      ],
    },
    3: {
      name: 'Trivial en terminal',
      shortDescription: 'Un trivial sencillo por terminal',
      description: [
        'Nació como un proyecto para enseñarle java a un amigo',
        'La lista de preguntas y respuestas se reordenan en cada nuevo intento',
        'Como era algo sencillito, no tiene ni base de datos ni docker asociado',
      ],
    },
    4: {
      name: 'Escape From Purgatory',
      shortDescription: 'Videojuego Metroidvania en 2D',
      description: [
        'Sistema de progresión basado en Power-Ups que desbloquean nuevas habilidades.',
        'Sistema de Backtracking basado en las habilidades adquiridas durante la progresión.',
        'Diseño y estructuración del escenario, adaptándolo al sistema de progresión del jugador.',
        'Diseño y equilibrio de las mecánicas del personaje jugable, enemigos y jefes.',
        'Participación activa en el desarrollo del proyecto además de las labores de gestión.',
        'Desarrollado por un equipo de 3 personas',
        'Gestión del proyecto y coordinación del equipo mediante Jira',
        'Control de versiones usando Bitbucket siguiendo la metodología Gitflow',
      ],
    },
    5: {
      name: 'Chests, Please',
      shortDescription:
        'Juego 3D inspirado en Papers, Please ambientado en las aduanas de una ciudad medieval',
      description: [
        'Generación procedural de npcs',
        'Sistema de consecuencias basado en las decisiones y acciones del jugador',
        'Sistema de economía dinámica en el que la cantidad de NPCs y mercaderes presentes en la ciudad afecta directamente a su economía.',
        'Sistema de inspección de mercancías',
        'Sistema de sobornos que permite al jugador aceptar pagos a cambio de permitir el acceso a determinados NPCs',
        'Sistema de clima que modifica el consumo de combustible de la ciudad en función de las condiciones meteorológicas.',
        'Sistema de crímenes en el que determinados NPCs pueden hacer desaparecer a otros personajes, incluidos familiares del jugador e incluso este.',
        'Sistema de familia que permite realizar un seguimiento de los familiares del jugador. Si todos desaparecen o mueren, la partida termina.',
        'Implementación de 9 finales diferentes en función de las decisiones del jugador',
        'Desarrollado por un equipo de 4 personas',
        'Participación activa en el desarrollo del proyecto además de las labores de gestión.',
        'Gestión del proyecto y coordinación del equipo mediante Jira',
        'Control de versiones usando Bitbucket siguiendo la metodología Gitflow',
      ],
    },
    6: {
      name: 'PasswordAppManager',
      shortDescription:
        'Aplicación android para generación y gestión de contraseñas',
      description: [
        'Permite la generación de contraseñas siguiendo diferentes criterios',
        'Almacenamiento cifrado de contraseñas',
        'Permite asociar diferentes cuentas a una misma aplicación',
        'Algoritmo de puntuación de contraseñas en función de caracteres diferentes, patrones repetidos, longitud de contraseña, etc',
      ],
    },
    7: {
      name: 'Proyecto Decisiones',
      shortDescription:
        'API REST para un RPG basado en decisiones, con persistencia en MySQL y gestión mediante Spring Boot.',
      description: [
        'Backend desarrollado en Kotlin y Spring Boot para un RPG basado en decisiones.',
        'La aplicación permite gestionar usuarios, personajes, localizaciones, NPCs, decisiones y las opciones elegidas durante la partida.',
        'La API REST fue diseñada para ser consumida por la aplicación móvil desarrollada por otro miembro del equipo, mientras que el backend también incluye una interfaz web de administración mediante Thymeleaf.',
        'El proyecto utiliza una arquitectura por capas con controladores, casos de uso, servicios, repositorios y entidades de dominio, además de DTOs y mappers para separar los modelos de persistencia de los datos expuestos por la API.',
        'La aplicación y la base de datos pueden ejecutarse mediante Docker Compose, incluyendo la inicialización de la base de datos MySQL.',
      ],
    },
    8: {
      name: 'Portfolio',
      shortDescription: 'Portfolio personal',
      description: [
        'Portfolio personal desarrollado con React y TypeScript, concebido no solo como una presentación de mi experiencia y proyectos, sino también como un proyecto vivo en el que experimentar y consolidar conocimientos de desarrollo frontend.',
        'La aplicación está planteada como una SPA modular y extensible, con una estructura preparada para incorporar nuevos proyectos, tecnologías y contenido progresivamente. Entre sus funcionalidades se incluye la navegación mediante React Router, filtrado de proyectos por tecnologías y un sistema de temas visuales.',
        'Durante el desarrollo estoy poniendo especial atención en la reutilización de componentes, la separación de responsabilidades, el tipado estricto y la mantenibilidad del código.',
        'El propio portfolio sirve así como una muestra de mi evolución como desarrollador y de las decisiones técnicas que voy incorporando a medida que el proyecto crece.',
        'Todo el proceso de desarrollo se ha hecho usando GitHub Projects',
      ],
    },
  },
};
