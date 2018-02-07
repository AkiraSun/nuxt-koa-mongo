import Services from './services'

export default {
  nuxtServerInit({ commit }, { req }) {
    console.log('req.session', req.session)
    console.log('nuxtServerInit')
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      let { data } = await Services.login({ username, password })
      if (data.login === true) {
        commit('SET_USER', data)
        this.$router.push('/')
      }
      return data
    } catch (e) {
      if (e.response.status === 401) {
        throw new Error('You can\'t do it')
      }
    }
  },
  async logout({ commit }) {
    const { data } = await Services.logout()
    console.log('logout', data)
    if (data.login === false) {
      commit('SET_USER', null)
      this.$router.push('/login')
    }
  }

}
