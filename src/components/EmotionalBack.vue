<template lang="pug">
  div(@click="backToMemories")#header
    div.children back
</template>

<script>
export default {
  name: 'EmotionalHeader',
  methods: {
    backToMemories () {
      history.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  font-family: 'Ubuntu', sans-serif;
  position: fixed;
  background-color: #000000;
  color: #7ACAC7;
  transform: rotate(90deg);
  right: -38px;
  bottom: 100px;
  z-index: 9999;
  height: 40px;
  width: 100px;
  font-size: 22px;
  font-weight: 700;
  border-radius: 9px;
}

.children {
  position: absolute;
  bottom: 3px;
  right: 25px;
}
</style>
