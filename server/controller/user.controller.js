import User from '../model/user.model'

export default class UserController {
    // 登录
  static async login(ctx) {
    const { username, password } = ctx.request.body
    const user = await User
                  .findOne({ 'username': username, 'password': password }, (err, doc) => {
                    if (err) {
                      console.log('错误')
                    }
                  })
    if (user) {
    // 数据库存在用户名密码，设置session，返回用户名
      ctx.session.authUser = { username: user.username }
      ctx.body = {
        username: user.username,
        login: true
      }
    } else {
      ctx.body = {
        message: '用户名密码错误',
        login: false
      }
    }
  }
 // 登出
  static async logout(ctx) {
    delete ctx.session.authUser
    ctx.body = {
      login: false
    }
  }
}
