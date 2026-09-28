import { defineConfig } from 'astro/config';
import { publication } from './config/deployment.mjs';

if (!publication.configured) {
  console.warn('\n[Publicación pendiente] Sustituye TU_USUARIO en config/deployment.mjs antes de publicar. El sitio funciona en local; se omiten GitHub y la URL canónica.\n');
}

export default defineConfig({
  output: 'static',
  site: publication.site,
  base: publication.base,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
