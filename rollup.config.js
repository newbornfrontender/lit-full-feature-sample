import resolve from 'rollup-plugin-node-resolve';

import babel from './plugins/babel';

export default {
  input: 'src/index.js',

  output: {
    format: 'esm',
    dir: 'public',
  },

  plugins: [
    resolve({
      jsnext: true,
      browser: true,
      modulesOnly: true,
    }),

    babel(),
  ],
};
