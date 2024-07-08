import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import styles from 'rollup-plugin-styles';
import {defineConfig} from 'rollup';

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
         mode:['extract', 'bundle.css']
      }),
      commonjs(),
      replace({
         preventAssignment: false,
         'process.env.NODE_ENV': '"development"'
      }),
      (function(a,b,c,d){
         return {
            augmentChunkHash(a,b,c,d){
               console.log(a,b,c,d);
            },
            buildStart(options){
               // PluginContext
               // => void | Promise<void>
               console.log(options);
            },
            buildEnd(a,b,c,d){
              console.log('buildEnd'); 
            },
            closeBundle(a,b,c,d){
               console.log(a,b,c,d);
            },
            closeWatcher(a,b,c,d){
               console.log(a,b,c,d);
            },
            generateBundle(a,b,c,d){
               console.log(a,b,c,d);
            },
            load(id){
               // PluginContext
               // => LoadResult | Promise<LoadResult>
               console.log(id);
            },
            moduleParsed(info){
               // PluginContext
               // => void | Promise<void>
               console.log(info);
            },
            onLog(a,b,c,d){
               console.log(a,b,c,d);
            },
            options(options){
               // MinimalPluginContext
               // => (InputOptions | NullValue) | Promise<InputOptions | NullValue>
               console.log(options);
            },
            outputOptions(a,b,c,d){
               console.log(a,b,c,d);
            },
            renderChunk(a,b,c,d){
               console.log(a,b,c,d);
            },
            renderDynamicImport(a,b,c,d){
               console.log(a,b,c,d);
            },
            renderError(a,b,c,d){
               console.log(a,b,c,d);
            },
            renderStart(a,b,c,d){
               console.log(a,b,c,d);
            },
            resolveDynamicImport(a,b,c,d){
               console.log(a,b,c,d);
            },
            resolveFileUrl(a,b,c,d){
               console.log(a,b,c,d);
            },
            resolveId(source, importer, options){
               // PluginContext 
               // => ResolveIdResult | Promise<ResolveIdResult>
               console.log(source, importer, options);
            },
            resolveImportMeta(a,b,c,d){
               console.log(a,b,c,d);
            },
            shouldTransformCachedModule(a,b,c,d){
               console.log(a,b,c,d);
            },
            transform(code, id){
               // TransformPluginContext
               // => TransformResult | Promise<TransformResult>
               console.log(code, id);
            },
            watchChange(a,b,c,d){
               console.log(a,b,c,d);
            },
            writeBundle(a,b,c,d){
               console.log(a,b,c,d);
            }
         }
      })()
   ]
})