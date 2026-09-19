import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';
// import pkg from './package.json';

import postcss from 'rollup-plugin-postcss';

export default [
    {
  input: 'index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    }
  ],
  external: [/@babel\/runtime/],
  plugins: [
    external(),
    commonjs(),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
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