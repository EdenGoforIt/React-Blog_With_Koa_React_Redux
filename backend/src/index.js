const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');
const app = new Koa();
const router = new Router();
const port = 4000;

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
