const Koa = require("koa");

const app = new Koa();

app.listen(8080, () => {
  console.log("open server localhost: 8080");
});
