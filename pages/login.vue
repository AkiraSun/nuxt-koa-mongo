<template>
  <section class="container">
     <form  @submit.prevent="login">
      <p class="error" v-if="formError">{{ formError }}</p>
      <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
      <p>Username: <input type="text" v-model="formUsername" name="username" /></p>
      <p>Password: <input type="password" v-model="formPassword" name="password" /></p>
      <button type="submit">Login</button>
      <p><el-button>默认按钮</el-button></p>
      <p>
        <el-radio  label="1">备选项</el-radio>
        <el-radio  label="2">备选项</el-radio>
      
      </p> 
      
    </form>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>
<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  mounted() {
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
