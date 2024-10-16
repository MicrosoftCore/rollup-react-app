import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import styles from 'rollup-plugin-styles';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'rollup';
// import { MyPlugin } from './lib/shaking.js';
import { MyPlugin } from './lib/index.js';

export default defineConfig({
   input: 'src/index.js',
   output: {
      file: 'dist/bundle.js',
      format: 'cjs'
   },
   experimentalLogSideEffects: true,
   plugins: [
      nodeResolve({
         extensions: ['.js', '.jsx']
      }),
      babel({
         babelHelpers: 'bundled',
         presets: ['@babel/preset-react'],
         extensions: ['.js', '.jsx']
      }),
      styles({
         mode: ['extract', 'bundle.css']
      }),
      commonjs(),
      // visualizer({
      //    filename: 'bb.html',
      //    title: 'ilbb',
      //    open: true,
      // }),
      // replace({
      //    preventAssignment: false,
      //    'process.env.NODE_ENV': '"development"'
      // }),
      MyPlugin()
   ]
})