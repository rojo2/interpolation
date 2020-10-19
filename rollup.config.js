export default {
  input: 'src/interpolation.js',
  output: [
    {
      file: 'dist/interpolation.esm.js',
      sourcemap: true,
      format: 'esm'
    },
    {
      file: 'dist/interpolation.js',
      sourcemap: true,
      format: 'cjs'
    }
  ]
}
