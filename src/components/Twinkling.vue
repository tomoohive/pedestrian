<template lang="pug">
  div#twinkling
    img(:src="twinklingImage.url")
    div.title {{twinklingImage.title}}
    div.description From {{twinklingDistributer}}
    p #{"\n"}
    p #{"\n"}
    div.title-place Location
    div.description-place
      i.fas.fa-map-marker-alt {{twinklingContinent}}
      i.fas.fa-angle-right {{twinklingCountry}}
      i.fas.fa-angle-right {{twinklingCity}}
    emotional-header
    emotional-back
</template>

<script>
import axios from 'axios'
import router from '@/router'
import EmotionalHeader from './EmotionalHeader'
import EmotionalBack from './EmotionalBack'

export default {
  name: 'Twinkling',
  props: ['id'],
  components: {
    EmotionalHeader,
    EmotionalBack
  },
  data () {
    return {
      twinklingImage: '',
      twinklingLocation: [],
      twinklingDistributer: '',
      twinklingContinent: '',
      twinklingCountry: '',
      twinklingCity: ''
    }
  },
  mounted () {
    const imgApi = 'https://wfc-2019.firebaseapp.com/image/' + this.id
    axios.get(imgApi).then(response => {
      this.twinklingImage = response.data.data
      this.twinklingLocation = response.data.data.location
      this.twinklingDistributer = this.twinklingImage.author
      const addressApi = 'https://api.opencagedata.com/geocode/v1/json?q=' + this.twinklingLocation.lat + '+' + this.twinklingLocation.lng + '&key=bc14caf04bee4b08b929213dc1fd4cf6'
      axios.get(addressApi).then(response => {
        this.twinklingContinent = response.data.results[0].components.continent
        this.twinklingCountry = response.data.results[0].components.country
        this.twinklingCity = response.data.results[0].components.city
      })
    })
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

.title {
  width: 100%;
  font-family: 'Anton', sans-serif;
  font-size: 30px;
  text-align: left;
}

.description {
  width: 100%;
  font-size: 18px;
  text-align: left;
}

.title-place {
  width: 100%;
  font-family: 'Anton', sans-serif;
  font-size: 25px;
  text-align: left;
}

.description-place {
  width: 100%;
  font-size: 16px;
  text-align: left;
}
</style>
