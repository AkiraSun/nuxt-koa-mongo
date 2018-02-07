// 路由中间件 在nuxt.config里面配置
export default function ({ store, redirect, route, to, next }) {
  console.log('$router', route)
  console.log('to', to)
  // const reg = RegExp('/login')
  if (route.path !== '/login' && !store.state.authUser) {
    console.log(123)
    return redirect({
      path: '/login',
      query: { redirect: route.fullPath }
    })
  } else if (route.path === '/login' && store.state.authUser) {
    return redirect({
      path: '/'
    })
  } else {
    return redirect()
  }
  // if (route.path !== '/login') {
  //   if (!store.state.authUser) {
  //     console.log('lololo')
  //     return redirect({
  //       path: '/login',
  //       query: { redirect: route.fullPath }
  //     })
  //   }
  // } else {
  //   if (store.state.authUser) {
  //     return redirect('/')
  //   }
  // }
}
