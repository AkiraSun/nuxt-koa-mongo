<template>
  <div class="layout">
    <nuxt class="layout"/>
  </div>
</template>

<script>
// import MyFooter from '../components/Footer.vue'

export default {
  fetch() {
    console.log(23333)
  },
  mounted() {
    console.log(123)
  }
  // asysData({ store, redirect }) {
  //   console.log(1234)
  //   this.$router.beforeEach((to, from, next) => {
  //     // 若userkey不存在并且前往页面不是登陆页面，进入登陆
  //     // 若userkey存在并且前往登陆页面，进入主页
  //     console.log('to', to)
  //     if (!store.state.authUser && to.path !== '/login') {
  //       next({
  //         path: '/login',
  //         query: { redirect: to.fullPath }
  //       })
  //     } else if (store.state.authUser && to.path === '/login') {
  //       next({ path: '/' })
  //     } else {
  //       next()
  //     }
  //     //  if (!store.state.authUser&&to.path !== '/login') {
  //     //     if (!store.state.authUser) {
  //     //       console.log('middlewaressss')
  //     //       return redirect('/login')
  //     //     }
  //     //   } else {
  //     //     if (store.state.authUser) {
  //     //       console.log('123456')
  //     //       return redirect(route)
  //     //     }
  //     //   }
  //     console.log('to', to)
  //     console.log(store.state.authUser)
  //   })
  // }
}
</script>

<style>
.layout {
  height: 100%;
}
.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
