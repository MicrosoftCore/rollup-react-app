
思路一
通过分析依赖视图,修改Graph 的sideEfect 算法,修改传递给 rollup—plugin—styles 的 transform hook,
rollup—plugin—styles处理的全部样式文件,最终都会经过其内置的 always Process 的postcss loader,该
loader 会去计算 extracted 属性,并影响最后打包的css 的计算逻辑


思路二
在 generateBundle前,对即将生成的产物做 prune,可使用三方实现,但需要注意,此方式比较激进。可能会导
致部分样式被意外的 prune,以及无法处理动态生成的 className


思路三
基于 rollup 的文件解析系统以及模块加载的中间件,修改LoadResult的moduleSideEffects 属性,破环样式作
为副作用被打包进来的行为,但需要注意的是,你可能需要单独引用 global.css 等影响全局的样式
