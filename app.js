const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')();
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
//const handlebars= require('handlebars') //使用handlebars模板
const nunjucks = require('koa-nunjucks-2') //对特殊字符进行转义，防止 Xss 攻击
const path=require('path')

const response = require('./src/middlewares/response'); //统一响应处理，在路由前调用
const { backendRouter, frontendRouter } = require('./src/index');

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

/* app.use(views(__dirname + '/views', {
  //extension: 'pug'
  map : {html:'nunjucks'}
})) */
app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),// 指定视图目录
  nunjucksConfig: {
    trimBlocks: true // 开启转义 防Xss
  }
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
/* app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods()) */
app.use(response)
app.use(backendRouter.routes(),backendRouter.allowedMethods()) //back模块路由
app.use(frontendRouter.routes(),frontendRouter.allowedMethods()) //front模块路由




// error-handling
app.on('error', (err, ctx) => {
  console.error('服务器错误', err, ctx)
  ctx.render('error', { message: ' 服务器错误!',error: err });
});

module.exports = app
