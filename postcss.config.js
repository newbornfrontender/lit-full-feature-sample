module.exports = ({ env }) => ({
  plugins: {
    'postcss-preset-env': {
      stage: 0,

      autoprefixer: env === 'production',
    },
  },
});
