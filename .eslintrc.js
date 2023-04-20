module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    "no-debugger": "off",
    'vue/multi-word-component-names': 'off',
  }
}
