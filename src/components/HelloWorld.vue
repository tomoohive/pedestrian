<template lang="pug">
  div#hello
    h1 {{ msg }}
    h2 Essential Links
    ul
      li: a(href="#" target="_blank") Core Docs
      li: a(href="#" target="_blank") Forum
      li: a(href="#" target="_blank") Gitter Chat
      li: a(href="#" target="_blank") Twitter
    h2 Ecosystem
    ul
      li: a(ref="#" target="_blank") vue-router
      li: a(ref="#" target="_blank") vuex
      li: a(ref="#" target="_blank") vue-loader
      li: a(ref="#" target="_blank") awesome-vue
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
