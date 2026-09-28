export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  featured?: boolean;
  project?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Profile {
  name: string;
  firstName: string;
  surnames: string;
  initials: string;
  headline: string;
  role: string;
  location: string;
  email: string;
  linkedin: string | null;
  photo: { path: string; alt: string; width: number; height: number } | null;
  cv: { path: string; publicAuthorized: boolean } | null;
  introduction: string;
  about: string[];
  strengths: string[];
  primaryTechnologies: string[];
  skills: { title: string; icon: 'code' | 'database' | 'layers' | 'git'; items: string[] }[];
  experience: Experience[];
  education: { title: string; school: string; location: string; period: string }[];
  languages: { name: string; level: string }[];
  other: string[];
  meta: { title: string; description: string };
}

export const profile: Profile = {
  name: 'Manuel Arco López',
  firstName: 'Manuel',
  surnames: 'Arco López',
  initials: 'MA',
  headline: 'Desarrollador web | Java · Spring · Oracle',
  role: 'Desarrollador web',
  location: 'Sevilla, España',
  email: 'manarclop11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manuarco',
  photo: null,
  cv: null,
  introduction: 'Desarrollo, mantenimiento y mejora continua de aplicaciones web. Del código a una experiencia que funciona.',
  about: [
    'Soy desarrollador web con experiencia en aplicaciones y plataformas educativas. Mi trabajo se centra en implementar nuevas funcionalidades, resolver incidencias y optimizar páginas web.',
    'Trabajo con Java, JSP, JavaScript, Spring, HTML, CSS, Oracle, PL/SQL y Git. Me gusta abordar los problemas con una mirada práctica y colaborar con el equipo en entornos ágiles para seguir mejorando cada aplicación.',
  ],
  strengths: ['Capacidad resolutiva', 'Trabajo en equipo', 'Adaptación y flexibilidad', 'Comunicación efectiva', 'Profesionalidad y responsabilidad', 'Proactividad y eficiencia'],
  primaryTechnologies: ['Java', 'Spring', 'Oracle'],
  skills: [
    { title: 'Desarrollo web', icon: 'code', items: ['Java', 'Spring', 'JSP', 'JavaScript', 'HTML', 'CSS'] },
    { title: 'Bases de datos', icon: 'database', items: ['Oracle', 'PL/SQL', 'SQL'] },
    { title: 'Otras tecnologías', icon: 'layers', items: ['PHP', 'Bootstrap'] },
    { title: 'Herramientas y metodología', icon: 'git', items: ['Git', 'Entornos ágiles'] },
  ],
  experience: [
    {
      role: 'Desarrollador web',
      company: 'Atech Advanced Solutions S.A.',
      location: 'Sevilla',
      start: 'Diciembre de 2022',
      // Mantener «actualidad» únicamente mientras corresponda al CV vigente.
      end: 'Actualidad',
      featured: true,
      project: 'Proyecto Séneca · Plataformas educativas',
      responsibilities: [
        'Desarrollo y mantenimiento de aplicaciones web en el proyecto Séneca, implementando nuevas funcionalidades y optimizando páginas con JSP, JavaScript y Spring.',
        'Pruebas y depuración de errores para asegurar la estabilidad del software.',
        'Validación de código para compatibilidad en distintos dispositivos y navegadores.',
        'Optimización de consultas complejas en Oracle con PL/SQL.',
        'Uso de Git para el control de versiones.',
      ],
      technologies: ['Java', 'JSP', 'JavaScript', 'Spring', 'Oracle', 'PL/SQL', 'Git'],
    },
    {
      role: 'Desarrollador web en prácticas',
      company: 'Canagrosa Lab & Services',
      location: 'Sevilla',
      start: 'Marzo de 2022',
      end: 'Junio de 2022',
      responsibilities: [
        'Mantenimiento y actualización de aplicaciones y páginas web.',
        'Diseño y desarrollo de plataformas web funcionales.',
        'Modernización de una aplicación interna mediante la actualización de su versión de PHP para asegurar un mejor rendimiento.',
        'Manejo de herramientas de monitorización de bases de datos.',
      ],
      technologies: ['PHP'],
    },
    {
      role: 'Desarrollador web en prácticas',
      company: 'Fundación Loyola',
      location: 'Sevilla',
      start: 'Marzo de 2021',
      end: 'Junio de 2021',
      responsibilities: [
        'Cambio de versión de Bootstrap 3 a Bootstrap 5.',
        'Diseño de interfaces de usuario y diseño web con HTML y CSS.',
        'Implementación de mejoras de desarrollo continuo de plataformas.',
        'Mantenimiento y actualización de aplicaciones y páginas web.',
      ],
      technologies: ['Bootstrap', 'HTML', 'CSS'],
    },
  ],
  education: [
    { title: 'Grado Superior de Desarrollo de Aplicaciones Web', school: 'I.E.S. Julio Verne', location: 'Sevilla', period: 'Septiembre de 2021 – junio de 2022' },
    { title: 'Grado Superior de Desarrollo de Aplicaciones Multiplataforma', school: 'SAFA Nuestra Señora de los Reyes', location: 'Sevilla', period: 'Septiembre de 2019 – junio de 2021' },
    { title: 'Bachillerato en Ciencias Sociales', school: 'I.E.S. Ilipa Magna', location: 'Sevilla', period: 'Septiembre de 2017 – junio de 2019' },
  ],
  languages: [{ name: 'Inglés', level: 'B1' }],
  other: ['Carné de conducir y vehículo propio.'],
  meta: {
    title: 'Manuel Arco López · Desarrollador web',
    description: 'Desarrollador web en Sevilla con experiencia en Java, Spring, JSP, JavaScript y Oracle. Conoce mi trayectoria, tecnologías y formación.',
  },
};
