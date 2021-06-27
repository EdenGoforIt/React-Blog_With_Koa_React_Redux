const Router = require('koa-router');
const postController = require('./posts.ctrl');
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postController.list);
posts.post('/', postController.write);

const post = new Router();
post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.remove);
post.patch('/', postsCtrl.update);

posts.use('/:id', postController.checkObjectId, post.routes());

export default posts;
