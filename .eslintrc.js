module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		node: true,
		"jest/globals": true,
		"cypress/globals": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module",
	},
	"plugins": [
		"react", "jest", "cypress"
	],
	"rules": {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"no-unused-vars": "warn",
		"eqeqeq": "error",
		"no-trailing-spaces": "error",
		"no-console": 0,
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"arrow-spacing": [
			"error", { "before": true, "after": true }
		],
		"semi": [
			"error",
			"always"
		]
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};



