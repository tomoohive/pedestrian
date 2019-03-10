<template lang="pug">
  div#permanent
    emotional-header
    div.grid-container
      div(v-for="(memory, index) in memoriesImage" :key="index" @click="peepInMemories(memory.id)").grid
        div.picture-container
          img(:src="memory.url")
          div.picture-text {{memory.title}}
    infinite-loading(@infinite="permanentHandler")
      div(slot="spiral")
      div(slot="no-more") 思い出が...
    gerund-button
</template>

<script>
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'

import router from '@/router'
import GerundButton from './GerundButton'
import EmotionalHeader from './EmotionalHeader'

const api = 'https://wfc-2019.firebaseapp.com/images'

export default {
  name: 'Permanent',
  components: {
    InfiniteLoading,
    GerundButton,
    EmotionalHeader
  },
  data () {
    return {
      limit: 10,
      offset: 0,
      memoriesImage: []
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
</style>
