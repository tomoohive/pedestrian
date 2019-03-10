<template lang="pug">
  div#permanent
    emotional-header
    div.grid-container
      div(v-for="(memory, index) in filteredTitle" :key="index" @click="peepInMemories(memory.id)").grid
        div.picture-container
          img(:src="memory.url")
          div.picture-text {{memory.title}}
    infinite-loading(@infinite="permanentHandler")
      div(slot="spiral")
      div(slot="no-more") あなたの思い出がこれ以上ありません
    div(@click="onModalEvenet")#search
      div.children search
    twinkling-search(v-if="modal")
      div(slot="header")
      div(slot="body")
        input(v-model="keyword" placeholder="search word").twinkling-search
      div(slot="footer").twinkling-close
        div(@click="offModalEvenet") Close
</template>

<script>
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'

import router from '@/router'
import EmotionalHeader from './EmotionalHeader'
import TwinklingSearch from './TwinklingSearch'

const api = 'https://wfc-2019.firebaseapp.com/images'

export default {
  name: 'Permanent',
  components: {
    InfiniteLoading,
    EmotionalHeader,
    TwinklingSearch
  },
  data () {
    return {
      limit: 10,
      offset: 0,
      memoriesImage: [],
      keyword: '',
      modal: false
    }
  },
  computed: {
    filteredTitle () {
      var images = []
      for (var i in this.memoriesImage) {
        var image = this.memoriesImage[i]
        if (image.title.indexOf(this.keyword) !== -1) {
          images.push(image)
        }
      }
      return images
    }
  },
  methods: {
    peepInMemories (id) {
      router.push({name: 'Twinkling', params: {id}})
    },
    permanentHandler ($state) {
      axios.get(api, {
        params: {
          limit: this.limit,
          offset: this.offset
        }
      }).then(response => {
        if (response.data.data.images.length) {
          this.memoriesImage.push(...response.data.data.images)
          $state.loaded()
          this.offset += 10
        } else {
          $state.complete()
        }
      })
    },
    onModalEvenet () {
      this.modal = true
    },
    offModalEvenet () {
      this.modal = false
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
  width: 100%;

}

li {
  display: inline-block;
  margin: 0 10px;
  width: 40%;
}

a {
  color: #42b983;
}

.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
}

.grid {
  padding: 5px;
  grid-column: 100%;
}

.picture-container {
}

.picture-container img {
  background-color: #FFCF2F;
  width: 100%;
  height: 180px;
  border-radius: 6px;
  object-fit: cover;
}

.picture-text {
  width: 100%;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
}

#search {
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
  right: 18px;
}

.twinkling-search {
  border:0;
  padding:10px;
  font-size:1.3em;
  color:#aaa;
  border:solid 2px #000000;
  margin:0 0 20px;
  width:300px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #FFCF2F;
}

.twinkling-close {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 20px;
}
</style>
