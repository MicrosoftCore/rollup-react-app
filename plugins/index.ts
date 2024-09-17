import { Plugin } from 'rollup';

export function MyPlugin(a, b, c, d): Plugin {
    return {
        augmentChunkHash(a, b, c, d) {
            console.log(a, b, c, d);
        },
        buildStart(options) {
            // PluginContext
            // => void | Promise<void>
            console.log(options);
        },
        buildEnd(a, b, c, d) {
            console.log('buildEnd');
        },
        closeBundle(a, b, c, d) {
            console.log(a, b, c, d);
        },
        closeWatcher(a, b, c, d) {
            console.log(a, b, c, d);
        },
        generateBundle(a, b, c, d) {
            console.log(a, b, c, d);
        },
        load(id) {
            // PluginContext
            // => LoadResult | Promise<LoadResult>
            console.log(id);
        },
        moduleParsed(info) {
            // PluginContext
            // => void | Promise<void>
            console.log(info);
        },
        onLog(a, b, c, d) {
            console.log(a, b, c, d);
        },
        options(options) {
            // MinimalPluginContext
            // => (InputOptions | NullValue) | Promise<InputOptions | NullValue>
            console.log(options);
        },
        outputOptions(a, b, c, d) {
            console.log(a, b, c, d);
        },
        renderChunk(a, b, c, d) {
            console.log(a, b, c, d);
        },
        renderDynamicImport(a, b, c, d) {
            console.log(a, b, c, d);
        },
        renderError(a, b, c, d) {
            console.log(a, b, c, d);
        },
        renderStart(a, b, c, d) {
            console.log(a, b, c, d);
        },
        resolveDynamicImport(a, b, c, d) {
            console.log(a, b, c, d);
        },
        resolveFileUrl(a, b, c, d) {
            console.log(a, b, c, d);
        },
        resolveId(source, importer, options) {
            // PluginContext 
            // => ResolveIdResult | Promise<ResolveIdResult>
            console.log(source, importer, options);
        },
        resolveImportMeta(a, b, c, d) {
            console.log(a, b, c, d);
        },
        shouldTransformCachedModule(a, b, c, d) {
            console.log(a, b, c, d);
        },
        transform(code, id) {
            // TransformPluginContext
            // => TransformResult | Promise<TransformResult>
            console.log(code, id);
        },
        watchChange(a, b, c, d) {
            console.log(a, b, c, d);
        },
        writeBundle(a, b, c, d) {
            console.log(a, b, c, d);
        }
    }
}