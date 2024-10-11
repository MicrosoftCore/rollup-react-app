/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
	AstNode, ChangeEvent, CustomPluginOptions, InputOptions, InternalModuleFormat, LogLevel, MinimalPluginContext,
	ModuleInfo, NormalizedInputOptions, NormalizedOutputOptions, OutputBundle, OutputOptions, Plugin, PluginContext,
	ProgramNode, RenderedChunk, ResolvedIdMap, RollupLog, TransformPluginContext,
} from 'rollup';

type ParallelPluginHooks =
	| "renderError"
	| "renderStart"
	| "writeBundle"
	| "banner"
	| "footer"
	| "intro"
	| "outro"
	| "buildEnd"
	| "buildStart"
	| "closeBundle"
	| "closeWatcher"
	| "moduleParsed"
	| "watchChange"

type AsyncPluginHooks =
	| "generateBundle"
	| "renderChunk"
	| "renderError"
	| "renderStart"
	| "writeBundle"
	| "buildEnd"
	| "buildStart"
	| "closeBundle"
	| "closeWatcher"
	| "load"
	| "moduleParsed"
	| "options"
	| "resolveDynamicImport"
	| "resolveId"
	| "shouldTransformCachedModule"
	| "transform"
	| "watchChange"

type AddonHooks = "banner" | "footer" | "intro" | "outro"

type FirstPluginHooks =
	| "renderDynamicImport"
	| "resolveFileUrl"
	| "resolveImportMeta"
	| "load"
	| "resolveDynamicImport"
	| "resolveId"
	| "shouldTransformCachedModule"

type SequentialPluginHooks =
	| "augmentChunkHash"
	| "generateBundle"
	| "outputOptions"
	| "renderChunk"
	| "onLog"
	| "options"
	| "transform"

type ParallelHooksOptions = {
	sequential?: boolean
}

export function MyPlugin(): Plugin {
	return {
		name: 'rollup-plugin-type',

		/**
			 * @param this
			 * @param chunk
			 * @returns {string | void}
			 * @
			 */
		augmentChunkHash(this: PluginContext, chunk: RenderedChunk) {

		},
		/**
		 *
		 * @param this
		 * @param options
		 * @returns {void | Promise<void>}
		 * @param {ParallelHooksOptions} [o]
		 */
		buildStart(this: PluginContext, options: NormalizedInputOptions) {

		},
		/**
		 *
		 * @param this
		 * @param error
		 * @returns {void | Promise<void>}
		 * @param {ParallelHooksOptions} [o]
		 */
		buildEnd(this: PluginContext, error?: Error) {

		},
		/**
		 *
		 * @param this
		 * @returns {void | Promise<void>}
		 * @param {ParallelHooksOptions} [o]
		 */
		closeBundle(this: PluginContext) {

		},
		/**
		 *
		 * @param this
		 * @returns {void | Promise<void>}
		 * @param {ParallelHooksOptions} [o]
		 */
		closeWatcher(this: PluginContext) {

		},
		/**
		 *
		 * @param this
		 * @param options
		 * @param bundle
		 * @param isWrite
		 * @returns {void | Promise<void>}
		 */
		generateBundle(this: PluginContext, options: NormalizedOutputOptions, bundle: OutputBundle, isWrite: boolean) {

		},
		/**
		 *
		 * @param this
		 * @param id
		 * @returns {LoadResult | Promise<LoadResult>}
		 */
		load(this: PluginContext, id: string) {
			// this.load({
			// 	id,
			// 	resolveDependencies: true
			// })
		},
		/**
		 *
		 * @param this
		 * @param info
		 * @returns {void | Promise<void>}
		 * @param {ParallelHooksOptions} [o]
		 */
		moduleParsed(this: PluginContext, info: ModuleInfo) {

		},
		/**
		 *
		 * @param this
		 * @param level
		 * @param log
		 * @returns {boolean | NullValue}
		 */
		onLog(this: MinimalPluginContext, level: LogLevel, log: RollupLog) {

		},
		/**
		 *
		 * @param this
		 * @param options
		 * @returns {NullValue | InputOptions | Promise<NullValue | InputOptions>}
		 */
		options(this: MinimalPluginContext, options: InputOptions) {

		},
		/**
		 *
		 * @param this
		 * @param options
		 * @returns {OutputOptions | NullValue}
		 */
		outputOptions(this: PluginContext, options: OutputOptions) {

		},
		/**
		 *
		 * @param this
		 * @param code
		 * @param chunk
		 * @param options
		 * @param meta
		 * @returns {{ code: string; map?: SourceMapInput } | string | NullValue}
		 */
		renderChunk(
			this: PluginContext,
			code: string,
			chunk: RenderedChunk,
			options: NormalizedOutputOptions,
			meta: {
				chunks: Record<string, RenderedChunk>;
			},
		) {

		},
		/**
		 *
		 * @param this
		 * @param options
		 * @returns {{ left: string; right: string; } | NullValue}
		 */
		renderDynamicImport(
			this: PluginContext,
			options: {
				customResolution: string | null;
				format: InternalModuleFormat;
				moduleId: string;
				targetModuleId: string | null;
			},
		) {

		},
		/**
		 *
		 * @param this
		 * @param error
		 * @returns {void | Promise<void>}
		 * @param {ParallelHooksOptions} [o]
		 */
		renderError(this: PluginContext, error?: Error) {

		},
		/**
		 *
		 * @param this
		 * @param outputOptions
		 * @param inputOptions
		 * @returns {void | Promise<void>}
		 */
		renderStart(this: PluginContext, outputOptions: NormalizedOutputOptions, inputOptions: NormalizedInputOptions) {

		},
		/**
		 *
		 * @param this
		 * @param specifier
		 * @param importer
		 * @param options
		 * @returns {string | NullValue | false | PartialResolvedId}
		 */
		resolveDynamicImport(
			this: PluginContext,
			specifier: string | AstNode,
			importer: string,
			options: {
				attributes: Record<string, string>;
			},
		) {

		},
		/**
		 *
		 * @param this
		 * @param options
		 * @returns {string | NullValue}
		 */
		resolveFileUrl(
			this: PluginContext,
			options: {
				chunkId: string;
				fileName: string;
				format: InternalModuleFormat;
				moduleId: string;
				referenceId: string;
				relativePath: string;
			},
		) {

		},
		/**
		 *
		 * @param this
		 * @param source
		 * @param importer
		 * @param options
		 * @returns {string | NullValue | false | PartialResolvedId}
		 */
		resolveId: {
			async handler(
				this: PluginContext,
				source: string,
				importer: string | undefined,
				options: {
					attributes: Record<string, string>;
					isEntry: boolean;
					custom?: CustomPluginOptions;
				},
			) {
				// const { isEntry, custom, attributes } = options
				const resolveId = await this.resolve(source, importer, { ...options, skipSelf: true, })

				if (resolveId) {
					const moduleInfo = await this.load({
						id: resolveId.id,
						resolveDependencies: true,
						attributes: resolveId.attributes,
						meta: resolveId.meta,
						moduleSideEffects: resolveId.moduleSideEffects,
						syntheticNamedExports: resolveId.syntheticNamedExports
					})

					// console.log(moduleInfo);

					return resolveId.id
				} else {
					return null
					// throw new Error("can not resolve source")
				}
			}
		},
		/**
		 *
		 * @param this
		 * @param property
		 * @param options
		 * @returns {string | NullValue}
		 */
		resolveImportMeta(
			this: PluginContext,
			property: string | null,
			options: { chunkId: string; format: InternalModuleFormat; moduleId: string },
		) {

		},
		/**
		 *
		 * @param this
		 * @param options
		 * @returns {boolean | NullValue}
		 */
		shouldTransformCachedModule(this: PluginContext, options: {
			ast: ProgramNode;
			code: string;
			id: string;
			meta: CustomPluginOptions;
			moduleSideEffects: boolean | "no-treeshake";
			resolvedSources: ResolvedIdMap;
			syntheticNamedExports: boolean | string;
		}) {

		},
		/**
		 *
		 * @param this
		 * @param code
		 * @param id
		 * @returns {TransformResult | Promise<TransformResult>}
		 */
		transform(this: TransformPluginContext, code: string, id: string) {

		},
		/**
		 *
		 * @param this
		 * @param id
		 * @param change
		 * @returns {void | Promise<void>}
		 * @param {ParallelHooksOptions} [o]
		 */
		watchChange(this: PluginContext, id: string, change: {
			event: ChangeEvent;
		}) {

		},
		/**
		 *
		 * @param this
		 * @param options
		 * @param bundle
		 * @returns {void | Promise<void>}
		 */
		writeBundle(this: PluginContext, options: NormalizedOutputOptions, bundle: OutputBundle) {

		},
	}
}
