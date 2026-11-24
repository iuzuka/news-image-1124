import { mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const __dirname = dirname(fileURLToPath(import.meta.url));

mkdir(outDir, { recursive: true }).then(() => {
  return copyFile(join(__dirname, 'entry.png'), join(outDir, 'entry.png'));
}).catch((err) => {
  console.error(err);
  process.exit(1);
});