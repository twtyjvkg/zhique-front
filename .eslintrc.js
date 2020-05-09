module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint'
	],
	rules: {
		'indent': [2, 4],
		'linebreak-style': [0],
		'quotes': [2, 'single'],
		'semi': [2, 'always'],
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/explicit-function-return-type': [0, {
			allowExpressions: true,
			allowTypedFunctionExpressions: true
		}],
		'@typescript-eslint/no-var-requires': 0,
		'react/prop-types': 0,
		'@typescript-eslint/no-explicit-any': 0,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			legacyDecorators: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		polyfills: ['fetch', 'promises'],
	},
};
