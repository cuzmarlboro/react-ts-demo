// ESlint 检查配置
module.exports = {
	root: true,
	parserOptions: {
		parser: 'eslint-plugin-react',
		sourceType: 'module',
	},
	env: {
		browser: true,
		es6: true,
	},
	extends: ['plugin:prettier/recommended'],
	rules: {},
};
