import { Plugin } from 'rollup';
/**
 * @description Here is a slightly artificial example (that I also want to put into the docs), 
 * which uses this to find out which modules will be loaded by a dynamic import and inject a proxy module 
 * that just logs all those modules when the dynamic import is triggered. 
 * More useful examples could involve scanning for CSS dependencies in a sub-graph to e.g. 
 * rewrite a dynamic import in the transform hook (just make sure to not wait for loading the module 
 * that contains the dynamic import if there is a cycle, or create a dead-lock between two modules dynamically importing each other.
 * For those cases, you probably need to create a registry which modules are currently waiting for dependency graphs to be resolved,
 * and for those modules, manually resolve the non-dynamic imports yourself instead of waiting for them.).
 * @author justinhone <justinhonejiang@gmail.com>
 * @date 2024-10-12 01:06
 */

// The leading \0 instructs other plugins not to try to resolve, load or
// transform our proxy modules
const DYNAMIC_IMPORT_PROXY_PREFIX = '\0dynamic-import:';

export default function dynamicChunkLogsPlugin(): Plugin {
    return {
        name: 'dynamic-chunk-logs',
        async resolveDynamicImport(specifier, importer) {
            // Ignore non-static targets
            if (!(typeof specifier === 'string')) return;
            // Get the id and initial meta information of the import target
            const resolved = await this.resolve(specifier, importer);
            // Ignore external targets. Explicit externals have the "external"
            // property while unresolved imports are "null".
            if (resolved && !resolved.external) {
                // We trigger loading the module without waiting for it here
                // because meta information attached by resolveId hooks, that may
                // be contained in "resolved" and that plugins like "commonjs" may
                // depend upon, is only attached to a module the first time it is
                // loaded.
                // This ensures that this meta information is not lost when we later
                // use "this.load" again in the load hook with just the module id.
                this.load(resolved);
                return `${DYNAMIC_IMPORT_PROXY_PREFIX}${resolved.id}`;
            }
        },
        async load(id) {
            // Ignore all files except our dynamic import proxies
            if (!id.startsWith('\0dynamic-import:')) return null;
            const actualId = id.slice(DYNAMIC_IMPORT_PROXY_PREFIX.length);
            // To allow loading modules in parallel while keeping complexity low,
            // we do not directly await each "this.load" call but put their
            // promises into an array where we await them via an async for loop.
            const moduleInfoPromises = [this.load({ id: actualId, resolveDependencies: true })];
            // We track each loaded dependency here so that we do not load a file
            // twice and also do  not get stuck when there are circular
            // dependencies.
            const dependencies = new Set([actualId]);
            // "importedIdResolutions" tracks the objects created by resolveId
            // hooks. We are using those instead of "importedIds" so that again,
            // important meta information is not lost.
            for await (const { importedIdResolutions } of moduleInfoPromises) {
                for (const resolved of importedIdResolutions) {
                    if (!dependencies.has(resolved.id)) {
                        dependencies.add(resolved.id);
                        moduleInfoPromises.push(this.load({ ...resolved, resolveDependencies: true }));
                    }
                }
            }
            // We log all modules in a dynamic chunk when it is loaded.
            let code = `console.log([${[...dependencies]
                .map(JSON.stringify as any)
                .join(', ')}]); export * from ${JSON.stringify(actualId)};`;
            // Namespace reexports do not reexport default exports, which is why
            // we reexport it manually if it exists
            if (this.getModuleInfo(actualId).hasDefaultExport) {
                code += `export { default } from ${JSON.stringify(actualId)};`;
            }
            return code;
        }
    };
}