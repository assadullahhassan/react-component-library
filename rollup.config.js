import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
// import pkg from './package.json';

import postcss from 'rollup-plugin-postcss';

export default [
    {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    }
  ],
  external: [/@babel\/runtime/],
  plugins: [
    external(),
    commonjs(),
    resolve(),
    postcss({
        plugins: [],
        minimize: true,
        babelHelpers: 'runtime',
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    terser()
  ]
}];