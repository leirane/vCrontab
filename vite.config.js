import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
// import postcssPresetEnv from 'postcss-preset-env';

export default ({mode}) => {
    const config = loadEnv(mode, './')
    return defineConfig({
        filenameHashing: false,
        productionSourceMap: false,
        css: {
            // modules: {
            //     scopeBehaviour: "local",
            //     localsConvention: "camelCaseOnly",
            // }
            // extract: false
            // postcss: {
            //     plugins: [
            //         postcssPresetEnv({})
            //     ],
            // }
        },
        // optimizeDeps: {
        //     entries: 'public/index.html',
        // },
        base: config.VITE_BASE_URL,
        // resolve: {
        //     alias: {
        //         vue: '@vue/compat'
        //     }
        // },
        plugins: [vue()],
        build: {
            cssCodeSplit: true,
            outDir: "dist", //输出文件名称
            lib: {
                entry: ["./src/index.js"], //指定组件编译入口文件
                name: "vcrontab",
                formats: ['umd'],
                fileName: 'vcrontab'
            },
            //库编译模式配置
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external: ["vue"],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    globals: {
                        vue: "Vue",
                    },
                },
            }, // rollup打包配置
        },
    })
}