<template lang="pug">
  transition(name="modal")
    div.modal-mask
      div.modal-wrapper
        div.modal-container
          div.modal-header
            slot(name="header") default header
          div.modal-body
            slot(name="body") default body
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
  transform: rotate(-20deg);
}

.modal-container {
  width: 200%;
  left: 200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #FFCF2F;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px;
  position: relative;
  left: -200px;
}

.modal-footer {
  position: relative;
  left: -200px;
}
</style>
