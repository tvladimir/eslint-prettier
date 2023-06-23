module.exports = {
  extends: [
    'airbnb',
    '../.eslintrc.js',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier/prettier',
    'eslint-config-prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 0,
    'no-underscore-dangle': [0],
    'arrow-parens': 0,
    'prefer-object-spread': 0,
    'arrow-body-style': [0],
    'react/prop-types': 'off',
    'react/jsx-fragments': 0,
    'react/jsx-filename-extension': [0],
    'react/jsx-no-bind': [0],
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': [0],
    'react/prefer-stateless-function': [0],
    'react/jsx-no-target-blank': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-for': [0],
    'zencity/autofix-jsx-no-target-blank': 'error',
    'zencity/no-function-calls-as-html-attributes': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignorePattern: '^import .* |^export .*',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['accumulator'],
      },
    ],
    // disable the rule for all files and later enable only for TS
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-default-export': 'off',
  },
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react', 'jest', 'zencity', 'eslint-plugin-prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
      alias: {
        map: [
          ['contracts', './src/contracts'],
          ['utils', './src/utils'],
          ['types', './src/types'],
          ['services', './src/services'],
          ['admin', './src/admin'],
          ['superadmins', './src/superadmins'],
          ['src', './src'],
          ['api', './src/api'],
          ['components', './src/components'],
          ['accounts', './src/accounts'],
          ['helpers', 'src/helpers'],
          ['stores', 'src/stores'],
        ],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-console': 'error',
        'no-unused-vars': 'off', // this is covered by `@typescript-eslint/no-unused-vars`
        'no-shadow': 'off', // This rule produces false positives on typescript enums
        'react/prop-types': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
        ],
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'require-await': 'error',
        'max-lines-per-function': ['error', 100],
        'max-lines': ['error', { max: 200, skipComments: true }],
        'max-params': ['error', 4],
        'max-statements': ['error', 15],
        'max-statements-per-line': ['error', { max: 1 }],
        'max-nested-callbacks': ['error', 2],
        'max-depth': ['error', { max: 3 }],
        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: ['accumulator'],
          },
        ],
        'id-denylist': ['error', 'data', 'err', 'e', 'cb', 'callback', 'container', 'wrapper', 'func', 'var', 'object'],
        'id-length': [
          'error',
          {
            max: 42,
            min: 4,
            exceptions: ['row', 'Box', 'url', 'id', 'ID', 'API', 'Api', 'api', 'x', 'y', 'sum', 'key', '_', 'i', 'ref'],
            properties: 'never',
          },
        ],
        'prefer-arrow-callback': 'error',
        'no-underscore-dangle': 'error',
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
          },
        },
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      rules: {
        'max-nested-callbacks': ['error', 5],
        'id-denylist': ['error', 'data', 'err', 'e', 'cb', 'callback', 'wrapper', 'func', 'var', 'object'], // `container` is used by react testing library
        'max-lines-per-function': 'off',
      },
    },
  ],
};
