<template>
  <div id="home">
    <Header></Header>
    <router-view/>
    <router-link to='/home/body' v-show="$route.name == 'Home'">Go To Body</router-link>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
