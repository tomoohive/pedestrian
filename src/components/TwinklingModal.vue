<template lang="pug">
  transition(name="modal")
    div.modal-mask
      div.modal-wrapper
        div.modal-container
          div.modal-header
            slot(name="header") default header 
          div.modal-body
            slot(name="body")
              img(:src="twinklingImage.url")
          div.modal-footer
            slot(name="footer") default footer
</template>

<script>
import axios from 'axios'

export default {
  name: 'TwinklingModal',
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

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-container > ul {
  overflow-y: scroll;
  max-height: 60vh;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}
</style>
