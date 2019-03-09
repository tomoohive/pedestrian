<template lang="pug">
  div#twinkling
    img(:src="twinklingImage.url")
</template>

<script>
import axios from 'axios'

export default {
  name: 'Twinkling',
  props: ['id'],
  data () {
    return {
      twinklingImage: ''
    }
  },
  mounted () {
    const url = 'https://wfc-2019.firebaseapp.com/image/' + this.id
    axios.get(url).then(response => (this.twinklingImage = response.data.data))
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
