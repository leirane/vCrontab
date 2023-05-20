const postcssPresetEnv = require('postcss-preset-env');
// postcssPresetEnv一次吧必要的插件都装上
module.exports = {
    plugins: [
        postcssPresetEnv(/* pluginOptions */)
    ],
}