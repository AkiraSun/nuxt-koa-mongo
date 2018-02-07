import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    console.log('req.session', req.session)
    console.log('nuxtServerInit')
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      console.log('dispatchlogin')
      const { data } = await axios.post('/api/login', { username, password })
      console.log('data', data)
      if (data.login === true) {
        commit('SET_USER', data)
        this.$router.push('/')
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    const { data } = await axios.post('/api/logout')
    console.log('logout', data)
    if (data.login === false) {
      commit('SET_USER', null)
      this.$router.push('/login')
    }
  }

}
