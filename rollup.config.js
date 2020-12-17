import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from "rollup-plugin-babel"
import { terser } from 'rollup-plugin-terser'

const isDev = process.env.NODE_ENV !== 'production';

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'cm-validator',
      file: 'dist/bundle.js',
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
  }
]