<template lang="pug">
  div#twinkling
    img(:src="twinklingImage.url")
    div.image-title {{twinklingImage.title}}
    div.image-distributer From {{twinklingImage.description.replace(/が投稿した画像/g, '')}}
    emotional-header
</template>

<script>
import axios from 'axios'
import router from '@/router'
import EmotionalHeader from './EmotionalHeader'

export default {
  name: 'Twinkling',
  props: ['id'],
  components: {
    EmotionalHeader
  },
  data () {
    return {
      twinklingImage: ''
    }
  },
  mounted () {
    const url = 'https://wfc-2019.firebaseapp.com/image/' + this.id
    axios.get(url).then(response => (this.twinklingImage = response.data.data))
  },
  methods: {
    back () {
      router.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#twinkling {
  padding: 10px;
}

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

img {
  background-color: #FFCF2F;
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}

.image-title {
  width: 100%;
  font-family: 'Anton', sans-serif;
  font-size: 30px;
  text-align: left;
}

.image-distributer {
  width: 100%;
  font-size: 18px;
  text-align: left;
}
</style>
