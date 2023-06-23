module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: ["plugin:prettier/recommended", "eslint:recommended", "plugin:node/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  plugins: [
    "jsdoc",
    "mocha",
  ],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "node/no-unpublished-require": 0,
    "node/no-unsupported-features/es-syntax":0,
    "jsdoc/check-examples": 1,
    "jsdoc/check-param-names": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 1,
    "jsdoc/no-undefined-types": 1,
    "jsdoc/require-param": 1,
    "jsdoc/require-param-name": 1,
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns": 1,
    "jsdoc/require-returns-check": 1,
    "jsdoc/require-returns-type": 1,
    // "jsdoc/valid-types": 1,
    "mocha/no-identical-title": "error",
    "mocha/no-exclusive-tests": "error",
    "no-process-exit": 0,
    "max-len": [2, 120, 4]
  },
  overrides: [{
    files: ["**/*.ts"],
    extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
    parserOptions: {
      sourceType: 'module',
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      ecmaVersion: 2018
    },
    parser: "@typescript-eslint/parser",
    plugins: [
      "jsdoc",
      "mocha",
      "@typescript-eslint"
    ],
  }]
};
