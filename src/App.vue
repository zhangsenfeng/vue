<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// 以symbol的方式引入iconfont
import { symbol } from './assets/iconfont/iconfont.js'

export default {
  created () {
    symbol()
  }
}
</script>

<style lang="scss" type="text/css">
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
  }
}
</style>
