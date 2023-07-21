import { build } from 'esbuild';

const baseSettings = {
  entryPoints: {
    index: './src/index.ts',
  },
  logLevel: 'info',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: ['ES6'],
};

build({
  ...baseSettings,
  outdir: 'dist/esm',
  format: 'esm',
});

build({
  ...baseSettings,
  outdir: 'dist/cjs',
  format: 'cjs',
});
