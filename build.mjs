import { build } from 'esbuild';

const baseSettings = {
  entryPoints: {
    hello: './src/hello/index.ts',
    bye: './src/bye/index.ts',
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
