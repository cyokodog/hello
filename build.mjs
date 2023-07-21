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
  outdir: 'dist',
};

build({
  ...baseSettings,
  format: 'esm',
  outExtension: { '.js': '.mjs' },
});

build({
  ...baseSettings,
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
});
