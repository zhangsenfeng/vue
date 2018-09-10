<template>
  <div id="main">
    <Header></Header>
    <div id="body">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#main {
  height: 100%;
  position: relative;
  padding-top: 60px;
  padding-bottom: 15px;
  box-sizing: border-box;
  overflow: hidden;
}

#header {
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 90% 10px 0;
  text-align: center;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);

  img {
    height: 40px;
    width: 40px;
  }
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 14px;
  line-height: 14px;
  font-size: 12px;
  text-align: center;
}

#body {
  padding: 10px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
