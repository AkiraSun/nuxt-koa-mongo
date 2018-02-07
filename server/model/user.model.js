import {mongoose} from '../mongodb'

const userSchema = new mongoose.Schema({

// 名字
  username: { type: String, default: '' },

// 密码
  password: {
    type: String,
    default: ''
        //  crypto.createHash('md5').update(config.AUTH.defaultPassword).digest('hex')
  }
})

const User = mongoose.model('user', userSchema, 'user')
export default User
