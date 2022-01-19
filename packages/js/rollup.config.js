import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    // ES6 production build of javascript
    input: './src/index.js',
    output: {
      file: './build/index.js',
      format: 'es',
    },
    treeshake: 'recommended', // Remove unused imports
    plugins: [
      nodeResolve(), // Locate imported node modules
      commonjs(), // Enable rollup to handle cjs modules
      terser({
        output: {
          comments: false,
        },
      }), // Minify output
    ],
  },
  {
    // ES5 production build of all javascript to be used as fallback in IE11
    input: './src/index.js',
    output: {
      file: './build/index.cjs',
      format: 'cjs',
    },
    treeshake: 'recommended', // Remove unused imports
    plugins: [
      nodeResolve(), // Locate imported node modules
      commonjs(), // Enable rollup to handle cjs modules
      babel({ exclude: 'node_modules/**', presets: ['@babel/preset-env'] }), // Transpile to ES5
      terser({
        output: {
          comments: false,
        },
      }), // Minify output
    ],
  },
]
