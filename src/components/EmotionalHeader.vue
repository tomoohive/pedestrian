<template lang="pug">
  div(@click="relplayMemories")#header
    div.children pedestrian
</template>

<script>
export default {
  name: 'EmotionalHeader',
  methods: {
    relplayMemories () {
      location.reload()
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
  right: -63px;
  bottom: 250px;
  z-index: 9999;
  height: 40px;
  width: 150px;
  font-size: 22px;
  font-weight: 700;
  border-radius: 9px;
}

.children {
  position: absolute;
  bottom: 3px;
  right: 20px;
}
</style>
