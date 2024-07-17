cli.run.index.runRollup > getConfigs >
cli.run.index.loadConfigFile > getConfigFileExport > loadTranspiledConfigFile > rollup.rollup
src.rollup.rollup > rollupInternal > catchUnfinishedHookActions
src.utils.hookActions.catchUnfinishedHookActions > graph.build()
src.rollup.rollup > rollupInternal > graph.build()
src.Graph > build > generateModuleGraph > ModuleLoader.addEntryModules

src.ModuleLoader > addEntryModules > loadEntryModule 
> fetchModule > handleExistingModule > fetchModuleDependencies > fetchStaticDependencies > fetchResolvedDependency
> fetchModule > handleExistingModule > fetchModuleDependencies > fetchStaticDependencies > fetchResolvedDependency
> fetchModule > handleExistingModule > fetchModuleDependencies > fetchStaticDependencies > fetchResolvedDependency
> fetchModule > handleExistingModule > fetchModuleDependencies > fetchStaticDependencies > fetchResolvedDependency
> fetchModule > addModuleSource > transform

src.utils.transform > transform > PluginDriver.hookReduceArg0
src.utils.PluginDriver > hookReduceArg0 > runHook



PluginDriver
Graph
Module
ModuleLoader



Graph > generateModuleGraph


function ResolveIdUtil(){
	src/utils/resolved.resolveId
	src/utils/resolved.resolveIdViaPlugins
	PluginDriver.hookFirstAndGetPlugin('resolveId') 
	PluginDriver.runHook('resolveId')
	Promise.then
	processTicksAndRejections runMicrotasks()
	handler.apply(context, parameters);
}

                    
src/rollup/rollup
rollup
	rollupInternal
		getInputOptions
			getProcessedInputOptions
				[
					'rollup-plugin-styles-shaking' 
						options
				]
		catchUnfinishedHookActions(
			PluginDriver.hookParallel('buildStart')
			PluginDriver.runHook('buildStart')
			[
				'rollup-plugin-styles-shaking'
					buildStart
			]
			Graph.build
			Graph.generateModuleGraph
				ModuleLoader.addEntryModules
				ModuleLoader.loadEntryModule
					ResolveIdUtil()
					[
						'rollup-plugin-commonjs'
							resolveId(
								resolveId <= 
									PluginContext.resolve
									ModuleLoader.resolveId
										ResolveIdUtil()
										[
											'rollup-plugin-styles-shaking' 
												resolveId
										]
										[
											'rollup-plugin-node-resolve'
												resolveId
													order: 'post'
													handler
														PluginContext.resolve
														ModuleLoader.resolveId
															ResolveIdUtil()
										]
								PluginContext.load(resolved)
									ModuleLoader.preloadModule
									ModuleLoader.fetchModule
									ModuleLoader.addModuleSource
										source <= Graph.fileOperationQueue<src.utils.Queue>.run(
											PluginDriver.hookFirst('load')
											PluginDriver.hookFirstAndGetPlugin('load')
											PluginDriver.runHook('load')
											[
												'rollup-plugin-styles-shaking' 
													load
											]
										)
										src/utils/transform(source)
										PluginDriver.hookReduceArg0('transform')
										PluginDriver.runHook('transform')
										[
											'rollup-plugin-styles'
												transform
										]
										[
											'rollup-plugin-styles-shaking'
												transform
										]   
							)
					]
		)