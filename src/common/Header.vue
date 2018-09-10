<template>
  <div id="header">
    <svg v-on:click="backToHome" class="icon" aria-hidden="true">
      <use xlink:href="#icon-vue"></use>
    </svg>
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

<style lang="scss" scoped>
#header svg {
  cursor: pointer;
  height: 40px;
  width: 40px;
}
</style>
