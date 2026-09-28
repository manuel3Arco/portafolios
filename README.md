# Portafolio de Manuel Arco López

Web estática en español, construida con Astro, TypeScript estricto y CSS. Incluye modos oscuro y claro, navegación móvil accesible, trayectoria profesional, tecnologías, formación y contacto. No utiliza backend, analítica, servicios de pago ni frameworks de interfaz. Las fuentes se sirven desde el propio sitio.

**Antes de publicar:** sustituye `TU_USUARIO` en `config/deployment.mjs`. El proyecto funciona en local con ese marcador, pero omite el perfil de GitHub, la URL canónica y `og:url`, añade `noindex` y bloquea el despliegue. No se ha creado ningún repositorio ni realizado ningún push.

## Desarrollo

Instala **Node.js 24** (la versión está declarada en `.nvmrc`, `.node-version` y `package.json`) y utiliza npm. No subas `node_modules`.

```sh
npm ci
npm run dev
```

Abre la dirección que indique Astro, normalmente `http://localhost:4321`.

| Comando | Función |
| --- | --- |
| `npm run dev` | Servidor local con recarga automática. |
| `npm run check` | Comprobación de Astro y TypeScript. |
| `npm run build` | Genera `dist/` y verifica recursos, enlaces internos, anclas, idioma, h1 y canonical. |
| `npm run preview` | Sirve el resultado compilado. Ejecuta `build` antes. |
| `npm run check:deploy` | Verifica que usuario y repositorio estén configurados; en Actions comprueba también el repositorio real. |

El fallo de `check:deploy` mientras siga `TU_USUARIO` es intencional; no impide `dev`, `check` ni `build`.

## Estructura

```text
config/
  deployment.mjs           # Usuario, repositorio y rutas derivadas
src/
  components/              # Cabecera, secciones, iconos y pie
  data/
    profile.ts             # Datos profesionales tipados y recursos opcionales
    projects.ts            # Tipo Project y listado inicialmente vacío
  layouts/BaseLayout.astro # Documento, metadatos, fuentes y tema inicial
  lib/
    assets.ts              # Validación de recursos al compilar
    urls.ts                # Rutas con base y URLs HTTPS
  pages/
    index.astro
    404.astro
  styles/global.css        # Paleta de ambos temas y diseño adaptable
public/
  favicon.svg
  fonts/                   # Licencias de las fuentes servidas localmente
  images/                  # Fotografía y capturas autorizadas
  cv/                      # Solo el PDF revisado y autorizado para publicar
scripts/
  check-deployment.mjs
  verify-build.mjs
.github/workflows/deploy.yml
astro.config.mjs
tsconfig.json
package.json
package-lock.json
```

## Personalización

- **Datos profesionales:** `src/data/profile.ts`. Incluye nombre, correo, textos, aptitudes, idiomas, tecnologías, experiencia y formación. La experiencia en Atech figura hasta «Actualidad», conforme al CV recibido: actualízala cuando corresponda. Astro y TypeScript son herramientas de esta web, no competencias añadidas a tu perfil.
- **Diseño:** `src/styles/global.css`. Las variables de `:root` definen el tema oscuro; `[data-theme='light']` define el claro. El modo elegido se guarda únicamente en el navegador. Si el almacenamiento está bloqueado, el selector funciona durante la visita.
- **Publicación y GitHub:** `config/deployment.mjs`. Es la única fuente para `site`, `base`, canonical, `og:url` y el perfil de GitHub.
- **Proyectos:** `src/data/projects.ts`.
- **Metadatos:** `profile.meta` en `src/data/profile.ts`. No se genera una imagen social ficticia.

No hay teléfono en los datos públicos. Guarda documentos originales y referencias privadas fuera de `public/`, por ejemplo en `private/` o `referencias/`, excluidos por `.gitignore`. Todo lo situado en `public/` termina en la web publicada: revisa su contenido antes de añadirlo.

### LinkedIn

`profile.linkedin` empieza como `null`. Sustitúyelo únicamente por tu URL HTTPS real y comprobada. Se mostrará en contacto y pie. Los valores vacíos o con protocolos distintos de HTTPS no se publican.

### Fotografía opcional

1. Revisa que puedes publicar la imagen y elimina metadatos personales que no quieras compartir.
2. Guarda el archivo en `public/images/perfil.webp`.
3. Cambia `photo: null` en `profile.ts` por el siguiente objeto, usando las dimensiones reales de tu archivo:

```ts
photo: {
  path: 'images/perfil.webp',
  alt: 'Retrato de Manuel Arco López',
  width: 800,
  height: 800,
},
```

La foto activará un bloque visual junto a la presentación. Por defecto, la presentación no muestra ninguna imagen ni tarjeta con monograma y utiliza una sola columna. Si activas una ruta inexistente, la compilación falla con un mensaje que identifica el recurso.

### CV opcional y autorizado

No se ha copiado ningún documento original. Prepara una versión pública del CV, **sin teléfono ni otros datos que no quieras publicar**, revísala y guarda el PDF en `public/cv/manuel-arco-cv.pdf`.

Después activa:

```ts
cv: {
  path: 'cv/manuel-arco-cv.pdf',
  publicAuthorized: true,
},
```

«Descargar CV» aparece únicamente cuando la configuración lo autoriza y el recurso existe y tiene cabecera PDF. Esta comprobación técnica no revisa el contenido personal: esa revisión te corresponde. Desactivar el botón no retira un archivo de `public/`: para retirarlo de la publicación debes retirar también el PDF y desplegar de nuevo. La carpeta `public/cv/` es la excepción explícita a la exclusión general de PDFs en `.gitignore`.

### Añadir proyectos reales

El array `projects` está vacío. Mientras lo esté, no aparecen ni sección, ni enlace en el menú, ni tarjetas de relleno.

Añade un objeto por proyecto propio en `src/data/projects.ts` siguiendo la interfaz `Project`:

| Campo | Contenido |
| --- | --- |
| `id` | Identificador único sin espacios, por ejemplo el nombre corto del proyecto. |
| `title` | Título real. |
| `description` | Explicación breve de lo que hace y tu aportación. |
| `technologies` | Array de tecnologías utilizadas. |
| `image` | Opcional: `{ path, alt, width, height }`, archivo público real y dimensiones reales. |
| `repositoryUrl` | Opcional: URL HTTPS real del repositorio que puedes compartir. |
| `demoUrl` | Opcional: URL HTTPS real de la demostración. |
| `status` | Opcional: estado real del proyecto. |

No añadas cadenas vacías como enlaces. Omite los campos que no correspondan. Guarda capturas en `public/images/` y escribe sus rutas sin `public/`, sin dominio y sin prefijo de repositorio: `images/nombre-del-archivo.webp`. La función de rutas añade la base automáticamente.

Séneca y las aplicaciones internas de las empresas son experiencia profesional, no proyectos personales. No publiques código, imágenes ni repositorios de terceros sin autorización. Después de añadir un proyecto, ejecuta `npm run check` y `npm run build`, y revisa los enlaces externos en el navegador.

## Publicar en GitHub Pages

El workflow utiliza las acciones oficiales de GitHub y Astro. Se ejecuta con cada push a `main` y manualmente con `workflow_dispatch` en `main`; no se ejecuta desde pull requests. Usa Node.js 24, tipos y compilación antes del despliegue, permisos `contents: read`, `pages: write`, `id-token: write`, entorno `github-pages` y un grupo de concurrencia para evitar publicaciones simultáneas. No necesita tokens personales ni secretos añadidos.

`withastro/action@v6` instala dependencias antes de `build-cmd`. El comando configurado restaura el lockfile del commit y ejecuta `npm ci` antes de comprobar y compilar, asegurando que el artefacto utiliza exactamente las versiones registradas. Se conserva `package-lock.json` en el control de versiones.

### Sitio de usuario: `<usuario>.github.io`

1. Edita `config/deployment.mjs`: sustituye `githubUsername: 'TU_USUARIO'` por tu usuario real y deja `repository: null`. Se derivan `site: 'https://<usuario>.github.io'` y `base: '/'`.
2. Ejecuta:

   ```sh
   npm ci
   npm run check:deploy
   npm run check
   npm run build
   npm run preview
   ```

3. Crea manualmente en GitHub el repositorio público `<usuario>.github.io`. La automatización comprueba que coincide con la configuración.
4. Revisa los archivos que vas a compartir. Si la carpeta aún no es un repositorio Git, los siguientes comandos son manuales; sustituye `<usuario>` antes de ejecutarlos:

   ```sh
   git init -b main
   git add .
   git status
   git diff --cached
   git commit -m "Crear portafolio profesional"
   git remote add origin https://github.com/<usuario>/<usuario>.github.io.git
   ```

5. En GitHub abre **Settings → Pages → Build and deployment → Source → GitHub Actions**.
6. Ejecuta manualmente `git push -u origin main`. También puedes iniciar el workflow desde **Actions → Publicar portafolio en GitHub Pages → Run workflow**, seleccionando `main`.
7. Espera a que termine el workflow y abre la URL que muestra el entorno `github-pages`. Los siguientes pushes a `main` actualizarán la web.

La configuración sigue la [guía oficial de Astro para GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) y la [acción oficial de Astro](https://github.com/withastro/action). El despliegue remoto solo puede comprobarse después de crear y configurar el repositorio.

### Repositorio de proyecto: `portfolio`

En el mismo archivo, establece tu usuario real y `repository: 'portfolio'`. Se mantienen el origen `https://<usuario>.github.io` y una base `/portfolio/`. La URL pública será `https://<usuario>.github.io/portfolio/`. Crea y usa el repositorio `portfolio` en los pasos anteriores.

No edites las rutas en los componentes: recursos, enlaces, favicon, fotografía, CV y metadatos se adaptan a la base. Durante desarrollo y preview, abre también `/portfolio/`. La página `404.html` se genera con enlaces que vuelven a la base configurada.

## Revisión

La compilación ejecuta una validación de todas las páginas HTML: recursos locales, enlaces y anclas, rutas dentro de la base, un único h1, idioma español, ausencia del marcador público y canonical coherente. Los enlaces externos se omiten en esta validación para no depender de servicios externos; comprueba las URLs reales al configurarlas.

Revisa al modificar el diseño: anchuras móviles y de escritorio, ambos temas, ampliación de texto, teclado y foco, apertura/cierre del menú con Escape, copia del correo (incluido el fallo del portapapeles), y contenido sin JavaScript. Con JavaScript desactivado, la navegación queda visible y todos los datos y enlaces siguen disponibles; se ocultan solo los botones que lo necesitan.

El sitio respeta `prefers-reduced-motion` y no oculta contenido con animaciones. No se ha publicado todavía. Consulta `VALIDACION.md` para los resultados ejecutados durante esta entrega.

## Pendiente de aportar

Usuario de GitHub, URL real de LinkedIn, fotografía opcional, CV público autorizado y proyectos personales reales. La web funciona sin estos recursos opcionales; el usuario de GitHub es necesario para publicar.

## Licencia

No se ha añadido una licencia de reutilización del código. La elección queda pendiente del propietario. Las dependencias conservan sus licencias propias. Las licencias OFL de las fuentes Manrope y JetBrains Mono también se distribuyen en `public/fonts/`; no constituyen una licencia del código del portafolio.
