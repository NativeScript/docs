const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack
	webpack.Utils.addCopyRule({
		from: '../../assets',
		to: 'assets',
		context: webpack.Utils.project.getProjectFilePath('node_modules'),
	});

	return webpack.resolveConfig();
};
