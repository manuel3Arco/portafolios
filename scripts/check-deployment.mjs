import { publication } from '../config/deployment.mjs';

if (!publication.configured) {
  console.error('Publicación detenida: sustituye TU_USUARIO en config/deployment.mjs.');
  process.exit(1);
}
if (process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.toLowerCase() !== `${publication.username}/${publication.repository}`.toLowerCase()) {
  console.error('El repositorio de GitHub no coincide con config/deployment.mjs. Revisa usuario y repository.');
  process.exit(1);
}
console.log(`Publicación configurada: ${publication.site}${publication.base}`);
