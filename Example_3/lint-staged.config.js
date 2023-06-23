module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{ts,tsx}': 'eslint --fix',
  '**/*.{js,json,md}': 'prettier --write',
  '**/*.{module.scss,scss}': 'stylelint --syntax=scss --fix',
};
