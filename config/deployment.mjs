/** Único punto de configuración de GitHub Pages. Ver README.md. */
export const deployment = {
  githubUsername: 'TU_USUARIO',
  // null => <usuario>.github.io. Para un repositorio de proyecto: 'portfolio'.
  repository: null,
};

export function resolveDeployment(config = deployment) {
  const username = config.githubUsername.trim();
  const configured = username !== 'TU_USUARIO' && username !== '';
  if (configured && !/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) {
    throw new Error('El usuario de GitHub no es válido. Revisa config/deployment.mjs.');
  }
  const repository = config.repository ?? (configured ? `${username}.github.io` : null);
  if (repository && !/^[a-z\d_.-]+$/i.test(repository)) {
    throw new Error('El nombre del repositorio no es válido.');
  }
  const base = repository && repository.toLowerCase() !== `${username}.github.io`.toLowerCase()
    ? `/${repository}/` : '/';
  return {
    configured,
    username,
    repository,
    base,
    site: configured ? `https://${username.toLowerCase()}.github.io` : undefined,
    githubUrl: configured ? `https://github.com/${username}` : null,
  };
}

export const publication = resolveDeployment();
