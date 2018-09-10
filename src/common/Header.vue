<template>
  <div id="header">
    <img v-on:click="backToHome" draggable="false" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  methods: {
    backToHome () {
      this.$router.push('home')
    }
  }
}
</script>
