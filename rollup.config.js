import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

const getConfig = ({ outputFile, isMinify }) => {
  return {
    input: 'src/index.ts',
    output: {
      name: 'intimeago',
      file: outputFile,
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: false, // ignore options in the tsconfig.json file and use the ones here instead
        rootDir: 'src',
        module: 'esnext',
        target: 'es5',
        moduleResolution: 'node',
        esModuleInterop: true,
        strict: true,
        typeRoots: [
          'node_modules/@types',
          'src/lib/interface'
        ],
        include: ['src/**/*.ts'],
        exclude: ['node_modules/**'],
      }),
      ...(isMinify ? [ terser() ] : [])
    ]
  }
}

export default [
  getConfig({ outputFile: 'dist/intimeago.js' }),
  getConfig({ outputFile: 'dist/intimeago.min.js', isMinify: true })
]
