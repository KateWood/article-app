var express = require('express');
var apiRouter = express.Router();
var articlesController = require('../controllers/articlesController')

apiRouter.route('/articles')

	.post(articlesController.create)

	.get(articlesController.index);

apiRouter.route('/article/:article_id')

	.get(articlesController.show)

	.patch(articlesController.update);

module.exports = apiRouter;