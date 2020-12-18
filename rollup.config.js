import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from "rollup-plugin-babel"
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const isDev = process.env.NODE_ENV !== 'production';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'cm-validator',
      // 浏览器环境使用的JS文件
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        // 防止打包node_modules下的文件
        exclude: 'node_modules/**',
        // 使plugin-transform-runtime生效
        runtimeHelpers: true
      }),
      !isDev && terser()
    ]
  },
  {
    input: 'src/index.js',
    output: [
      // CommonJS规范的打包文件，供Node使用
      { file: pkg.main, format: 'cjs' },
      // ES6规范的打包文件，供常规webpack项目使用
      { file: pkg.module, format: 'es' }
    ]
  }
]