module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	settings: {
		'react': {
			'pragma': 'React',
			'version': 'detect'
		}
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': ['react', '@typescript-eslint'],
	'rules': {
		'indent': [2, 4],
		'linebreak-style': [0],
		'quotes': [2, 'single'],
		'semi': [2, 'always'],
		'@typescript-eslint/ban-ts-ignore': 0,
		'react/prop-types': 0
	}
};
