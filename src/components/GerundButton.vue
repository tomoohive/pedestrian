<template lang="pug">
  div#footer
    a#fab
      slot(name="icon")
        i.fab.fa-product-hunt
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fab {/*円の部分*/
    display: block;
    width: 56px;/*幅*/
    height: 56px;/*高さ*/
    background: #FFCF2F;/*背景色*/
    text-align: center;/*中央寄せ*/
    border-radius: 50%;/*角丸く*/
    transition: .3s;/*滑らかな動きに*/
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);/*影*/
    margin-left: auto;
    margin-right: 7px;
}

#fab:hover {/*ホバー時*/
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}

#fab i {/*中央のアイコン*/
  color: white;
  line-height: 56px;/*＝幅と高さ*/
  vertical-align: middle;
  font-size: 30px;/*サイズ*/
}

#footer {
  display: flex;
  width: 100%;
  height: 65px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 9999;
  text-align: center;
}
</style>
