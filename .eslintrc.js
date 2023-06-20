module.exports = {
	"env": {
		"browser" : true,
		"node": true,
		"commonjs": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"sourceType": "module",
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"no-unused-vars": "warn",
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
		"semi": [
			"error",
			"always"
		]
	}
};
