# Validación de la entrega

Comprobaciones ejecutadas el 28 de septiembre de 2026 en Windows, con Node.js **24.21.0**, npm **11.19.0**, Astro **7.3.5** y Microsoft Edge automatizado con Playwright.

## Instalación y compilación

| Comprobación | Resultado final |
| --- | --- |
| `npm ci` | Correcto, instalación desde `package-lock.json`. |
| Auditoría de npm durante la instalación | 0 vulnerabilidades detectadas en las 274 dependencias auditadas. |
| `npm run check` | 24 archivos; 0 errores, 0 advertencias y 0 sugerencias. |
| `npm run build` | Correcto; genera `index.html`, `404.html` y recursos estáticos. |
| Validador de HTML compilado | Correcto en ambas páginas: recursos, enlaces internos, anclas, base, idioma, h1 y canonical. |
| `npm run preview` | Ejecutado y usado para las pruebas de navegador del resultado compilado. |
| `npm run dev` | Ejecutado; respuesta HTTP 200 de la página principal. |
| Publicación con `TU_USUARIO` | Bloqueada intencionalmente mediante `check:deploy`; el desarrollo y el build local funcionan. |

Node.js 24 se utilizó desde un runtime local aislado, sin cambiar la instalación global de Node.js del equipo. Para trabajar en otra terminal, activa o instala Node.js 24 antes de utilizar los comandos del README.

## Navegador

- Temas oscuro y claro: sin desbordamiento horizontal en **320, 375, 390, 580, 768, 800, 801, 1024 y 1440 px**.
- Capturas revisadas de escritorio y móvil, incluyendo el menú abierto y el tema claro.
- Axe con reglas WCAG 2 A/AA y 2.1 AA: **0 infracciones detectadas** en escritorio y móvil, en ambos temas. Es una comprobación automática, no una certificación exhaustiva de accesibilidad ni una prueba con lector de pantalla.
- Selector de tema: cambio efectivo, conservación tras recargar y funcionamiento con almacenamiento local bloqueado.
- Menú móvil: apertura con Enter y Espacio, cierre con Escape y restitución del foco; cierre al seleccionar una sección y al pulsar fuera del menú.
- Enlace «Saltar al contenido»: accesible mediante Tab y traslado del foco al contenido al activarlo.
- Correo: copia real al portapapeles y confirmación accesible. Se simuló el rechazo del permiso para comprobar el mensaje alternativo y la permanencia del correo visible.
- Ampliación del texto al 200% en 1024 px: sin desbordamiento horizontal.
- Movimiento reducido: `scroll-behavior: auto` al activar `prefers-reduced-motion`.
- JavaScript desactivado: contenido, navegación móvil y enlaces accesibles; selector de tema y copia ocultos.
- Ruta inexistente: HTTP 404, página personalizada y enlace funcional de regreso al inicio.
- Sin errores JavaScript ni respuestas HTTP fallidas de recursos durante las pruebas (excluyendo el 404 intencional).
- Elementos opcionales iniciales: proyectos, GitHub sin configurar, LinkedIn, foto y descarga del CV ausentes. Canonical y `og:url` omitidos hasta configurar la publicación.

## Rutas y datos opcionales

Se utilizaron cambios temporales exclusivamente locales, restaurados al terminar:

- Sitio de usuario: compilación con base `/`, perfil GitHub, canonical y metadatos coherentes.
- Repositorio `portfolio`: compilación con base `/portfolio/`; CSS, scripts, favicon, enlaces de navegación, canonical, `og:url` y retorno desde el 404 correctos.
- Configuración inválida: usuario con caracteres no válidos y repositorio con ruta ascendente rechazados.
- Fotografía inexistente, CV inexistente y archivo que no es PDF: compilación detenida con un error específico.
- CV no autorizado: botón de descarga ausente.
- Proyecto temporal: activación de sección y navegación, sin enlaces ni imagen cuando no están configurados.
- Build final restaurado: `TU_USUARIO` solo en la configuración, LinkedIn/foto/CV en `null`, array de proyectos vacío y ningún dato de prueba en el HTML publicado.

Las pruebas auxiliares y sus capturas se guardaron en `.qa/`, excluida del control de versiones y de la web. El validador de compilación permanece en `scripts/verify-build.mjs` y se ejecuta con cada `npm run build`.

## Pendiente por depender de datos o servicios aún no configurados

No se ha creado un repositorio, hecho push ni ejecutado el workflow en GitHub. Se verificó que las versiones configuradas de las acciones oficiales existen; el despliegue remoto y la respuesta del dominio público se comprobarán después de configurar GitHub Pages.

No hay URLs reales de GitHub o LinkedIn que validar todavía, ni fotografía, CV o proyectos personales para revisar. Sus enlaces y recursos deben comprobarse cuando se aporten. No se probaron Safari, Firefox, dispositivos físicos ni un lector de pantalla.
