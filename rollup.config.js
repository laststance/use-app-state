import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

const plugins = [
  babel({
    exclude: ['node_modules/**', 'src/**/*.test.js']
  }),
  resolve()
]

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: { file: 'lib/index.js', format: 'cjs', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: plugins
  },

  // ES
  {
    input: 'src/index.js',
    output: { file: 'es/index.js', format: 'es', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: plugins
  }
]
