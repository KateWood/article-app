var environment = require('./env.json');

exports.config = function() {
	var node_env = process.env.NODE_ENV || 'development';

	return environment[node_env]
}