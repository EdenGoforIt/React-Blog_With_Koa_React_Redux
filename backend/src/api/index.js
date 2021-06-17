const Router = require('koa-router');
const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes());

api.get('/', (ctx) => {
  ctx.body = 'home';
});

api.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;

  ctx.body = name ? `${name} exists` : `name not exist`;
});

module.exports = api;
