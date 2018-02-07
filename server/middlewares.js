// import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import mount from 'koa-mount'
import session from 'koa-session'
import routes from './router'
// 假设文件sessionStore.js 文件保存在 core的根目录

export default (app) => {
  app.keys = ['some secret hurr']
  // session 配置信息
  const CONFIG = {
    key: 'koa:sess',
    maxAge: 100000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false
  }

  // 以中间件的方式使用session
  app.use(session(CONFIG, app))
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(async (ctx, next) => {
    try {
      await next()

      // Handle 404 - throw it as an error.
      if (ctx.status === 404 && ctx.res.headersSent === false) {
        ctx.throw(404)
      }
      // Use this when you want to format the 200 res further.
      // e.g. {"status":200,"data":{"message":"Hello home sample!"}}
      // else, you get, e.g. {"message":"Hello home sample!"}
      if (ctx.status === 200 && ctx.res.headersSent === false) {
        // const session = ctx.session
          // 给session赋值
        // session.userInfo = {
        //   name: 'anziguoer',
        //   email: 'anziguoer@163.com',
        //   age: 28
        // }
        // console.log(12345)
        // console.log(ctx.session)
        console.log('midddleware')
        // if (!ctx.session && !ctx.session.authUser) {
        //   ctx.redirect('/')
        //   console.log(555)
        // } else {
        //   ctx.body = {
        //     status: 200,
        //     data: ctx.body
        //   }
        // }
      }
    } catch (err) {
      ctx.status = err.status || 500

      ctx.type = 'json'
      ctx.body = {
        status: ctx.status,
        message: err.message
      }

      ctx.app.emit('error', err, ctx)
    }
  })

  // app.use(ctx => {
  //   // ignore favicon
  //   if (ctx.path === '/favicon.ico') return

  //   let n = ctx.session.views || 0
  //   ctx.session.views = ++n
  //   ctx.body = n + ' views'
  // })
  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
//   app.use(serve(config.static_dir.root))

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use(bodyParser())

  // Add routes by group.
  // const mount = require('koa-mount')
  app.use(mount('/api', routes(app)))
}
