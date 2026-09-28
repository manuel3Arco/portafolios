import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';
import { publication } from '../config/deployment.mjs';

const root = resolve('dist');
const errors = [];
const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = resolve(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const htmlFiles = walk(root).filter((file) => file.endsWith('.html'));
const origin = publication.site ?? 'https://local.invalid';
const ids = (html) => [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const name = relative(root, file).split(sep).join('/');
  const report = (message) => errors.push(`${name}: ${message}`);
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) report('Debe haber un único h1.');
  if (!html.includes('lang="es"')) report('Falta el idioma español.');
  if (html.includes('TU_USUARIO')) report('Marcador de usuario en HTML público.');
  const pageIds = ids(html);
  if (new Set(pageIds).size !== pageIds.length) report('Hay identificadores duplicados.');
  const pageUrl = new URL(`${publication.base}${name === 'index.html' ? '' : name}`, origin);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (!value || value === '#') { report('Enlace o recurso vacío.'); continue; }
    if (/^(?:mailto:|tel:|data:)/.test(value)) continue;
    const url = new URL(value, pageUrl);
    if (url.origin !== origin) continue;
    if (!url.pathname.startsWith(publication.base)) { report(`Ruta fuera de base: ${value}`); continue; }
    let target = resolve(root, decodeURIComponent(url.pathname.slice(publication.base.length)) || '.');
    if (target !== root && !target.startsWith(`${root}${sep}`)) { report(`Ruta no válida: ${value}`); continue; }
    if (existsSync(target) && statSync(target).isDirectory()) target = resolve(target, 'index.html');
    if (!existsSync(target)) { report(`Recurso inexistente: ${value}`); continue; }
    if (url.hash && target.endsWith('.html') && !ids(readFileSync(target, 'utf8')).includes(decodeURIComponent(url.hash.slice(1)))) report(`Ancla inexistente: ${value}`);
  }
  if (name === 'index.html') {
    const expected = publication.configured ? `${publication.site}${publication.base}` : null;
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (expected ? canonical !== expected : canonical !== undefined) report('URL canónica incoherente.');
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Verificación estática correcta: ${htmlFiles.length} páginas; recursos, anclas, base, idioma, h1 y canonical.`);
