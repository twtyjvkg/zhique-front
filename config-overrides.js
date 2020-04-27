const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addDecoratorsLegacy,
    useBabelRc,
    useEslintRc,
    addWebpackPlugin,
    enableEslintTypescript,
    addTslintLoader
} = require('customize-cra');

const path = require('path');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // 支持webpack alias
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),
    // 支持装饰器
    addDecoratorsLegacy(),
    useBabelRc(),
    // useEslintRc(path.resolve(__dirname, '.eslintrc.js')),
    enableEslintTypescript(),
    // addTslintLoader(),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    // 添加build进度条
    addWebpackPlugin(new ProgressBarPlugin({
            complete: "█",
            format: `${chalk.green('Building')} [ ${chalk.green(':bar')} ] ':msg:' ${chalk.bold('(:percent)')}`,
            clear: true
        })
    )
);
