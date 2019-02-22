import resolve from 'rollup-plugin-node-resolve';

import postcss from './plugins/postcss';
import babel from './plugins/babel';

export default {
  input: 'src/index.js',

  output: {
    format: 'esm',
    dir: 'public',
    preferConst: true,
  },

  plugins: [
    resolve({
      jsnext: true,
      browser: true,
      modulesOnly: true,
    }),

    postcss(),
    babel(),
  ],
};
