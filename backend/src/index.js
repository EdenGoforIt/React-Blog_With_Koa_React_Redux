const Koa = require('koa');

const app = new Koa();
const port = 4000;

app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
