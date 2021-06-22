require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const api = require('./api');
const app = new Koa();
const router = new Router();

// eslint-disable-next-line no-undef
const { PORT } = process.env;

router.use('/api', api.routes());

//need to apply before using the route
router.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
