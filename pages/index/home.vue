<template>
  <section class="container">
    <img src="../../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
    </h1>
    <h2 class="info" >
      Please refresh the page
    </h2>
    <nuxt-link class="button" to="/">
      Home page1234
    </nuxt-link>
  </section>
</template>
<script>
export default {
  head() {
    return {
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
