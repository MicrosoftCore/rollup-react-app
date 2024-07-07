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



Graph > generateModuleGraph