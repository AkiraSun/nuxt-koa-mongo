import axios from 'axios'

const baseUrl = ''

class Services {
  /**
   * 登录接口
   * @param  {String} username
   * @param  {String} password
   *
   */
  login({ username, password }) {
    return axios.post(`${baseUrl}/api/login`, { username, password })
  }
   /**
   * 登出接口
   *
   */
  logout() {
    return axios.post(`${baseUrl}/api/logout`)
  }
}

export default new Services()
