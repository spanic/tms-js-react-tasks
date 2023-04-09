import cleanup from 'rollup-plugin-cleanup';

import commonjs from '@rollup/plugin-commonjs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/js/public.js',
  output: {
    dir: 'public',
    format: 'iife',
    name: 'my',
    // strict: false,
  },
  plugins: [commonjs({ transformMixedEsModules: true }), cleanup()],
};
