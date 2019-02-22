module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended'
  ].map(require.resolve),
};
