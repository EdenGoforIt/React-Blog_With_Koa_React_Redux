const Router = require('koa-router');
const postController = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postController.list);
posts.post('/', postController.write);
posts.get('/:id', postController.read);
posts.delete('/:id', postController.remove);
posts.patch('/:id', postController.update);

module.exports = posts;
