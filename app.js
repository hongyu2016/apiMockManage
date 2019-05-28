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
const Koa_Session = require('koa-session');   // 导入koa-session 

const { backendRouter, frontendRouter } = require('./src/index');

// 配置session
const session_signed_key = ["some secret hurr"];  // 这个是配合signed属性的签名key
const session_config = {
    key: 'sessionId', /**  cookie的key。 (默认是 koa:sess) */
    maxAge: 1440000,   /**  session 过期时间，以毫秒ms为单位计算 。*/
    autoCommit: true, /** 自动提交到响应头。(默认是 true) */
    overwrite: true, /** 是否允许重写 。(默认是 true) */
    httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
    signed: true, /** 是否签名。(默认是 true) */
    rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
    renew: false, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
};
const session = Koa_Session(session_config, app)
app.keys = session_signed_key;
app.use(session);

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

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

//添加全局通用数据
app.use(async (ctx, next) => {
  ctx.state = Object.assign(
    ctx.state,
    {
       cssPath: '/styles/',
       plugins: '/plugins/',
       imgges: '/imgges',
       js: '/js/',
       server:'/server/'
    }
    );
  await next();
})

//定义允许直接访问的url
const allowpage = ['/server/login','/server/dologin','/server/logout']
//拦截
function localFilter(ctx) {
    let url = ctx.originalUrl
    if (allowpage.indexOf(url) > -1) {
        console.log('当前地址可直接访问')
    }else {
        if (JSON.stringify(ctx.session) == "{}") { //如果监测到session为空，则没有登录，跳转到登录页面
          ctx.redirect('/server/login')
        } 
    }
}

//session拦截
app.use(async (ctx, next) => {
  localFilter(ctx)
  await next()
})

// routes
app.use(response) //统一响应格式
app.use(backendRouter.routes(),backendRouter.allowedMethods()) //back模块路由
app.use(frontendRouter.routes(),frontendRouter.allowedMethods()) //front模块路由

// error-handling
app.on('error', (err, ctx) => {
  console.error('服务器错误', err, ctx)
  ctx.render('error', { message: ' 服务器错误!',error: err });
});

module.exports = app
