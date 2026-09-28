import { existsSync, readFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { assetUrl } from './urls';

/** Comprobación en compilación; nunca se envía código de filesystem al navegador. */
export function publicAsset(path: string, pdf = false): string {
  const root = resolve('public');
  const file = resolve(root, path.replace(/^\//, ''));
  if (!file.startsWith(`${root}${sep}`) || !existsSync(file)) {
    throw new Error(`Recurso público inexistente o no válido: ${path}`);
  }
  if (pdf && (!path.toLowerCase().endsWith('.pdf') || readFileSync(file).subarray(0, 5).toString() !== '%PDF-')) {
    throw new Error(`El CV configurado no es un PDF válido: ${path}`);
  }
  return assetUrl(path);
}
