const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const api = require('./api');
const app = new Koa();
const router = new Router();
const port = 4000;

router.use('/api', api.routes());

//need to apply before using the route
router.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
