export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: { path: string; alt: string; width: number; height: number };
  repositoryUrl?: string;
  demoUrl?: string;
  status?: string;
}

// Solo proyectos propios reales y autorizados. La sección se oculta si está vacío.
export const projects: Project[] = [];
