<template lang="pug">
  div#permanent
    ul: li(v-for="(memory, index) in memoriesImage")
        img(:src="memory.url")
</template>

<script>
import axios from 'axios'

export default {
  name: 'Permanent',
  data () {
    return {
      memoriesImage: []
    }
  },
  mounted () {
    axios
      .get('https://wfc-2019.firebaseapp.com/images?limit=10&offset=0')
      .then(response => {
        this.memoriesImage = response.data.data.images
      }) //eslint-disable-line
  },
  methods: {
    peepInMemories () {
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
