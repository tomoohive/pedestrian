<template lang="pug">
  div#permanent
    emotional-header
    ul: li(v-for="(memory, index) in memoriesImage" :key="index" @click="peepInMemories(memory.id)")
      img(:src="memory.url")
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
  mounted () {
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
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  width: 100%;
}
</style>
