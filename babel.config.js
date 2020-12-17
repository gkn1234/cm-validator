// 写组件和库时的配置
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 放置babel在rollup之前做完commonJS处理，导致rollup的一些处理失败
        'modules': false,
        // 按需打包，忽略无用代码
        'useBuiltIns': 'usage',
        'corejs': '2.6.10'
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ],
  ignore: [
    'node_modules/**'
  ]
}