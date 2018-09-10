<template>
  <div id="home">
    <div :class="{animation}">
      <img v-on:click="toBody" draggable="false" src="../assets/logo.png">
      <span v-on:click="toBody">Click Here To Begin</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animation: false
    }
  },
  methods: {
    toBody () {
      this.animation = true
      setTimeout(() => {
        this.$router.push('catalog')
        this.animation = false
      }, 750)
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes div_begin {
  from {
    padding: 100px 30% 0 30%;
  }
  to {
    padding: 10px 90% 10px 0;
  }
}

@keyframes img_begin {
  from {
    margin-top: 60px;
    height: 200px;
    width: 200px;
  }
  to {
    margin-top: 0;
    height: 40px;
    width: 40px;
  }
}

#home {
  height: 100%;
  box-sizing: border-box;
  text-align: center;

  >div {
    padding: 100px 30% 0 30%;

    img {
      margin-top: 60px;
      cursor: pointer;
    }

    span {
      display: block;
      font-size: 36px;
      cursor: pointer;
    }
  }
  >div.animation {
    animation: div_begin 0.75s;

    img {
      animation: img_begin 0.75s;
    }

    span {
      display: none;
    }
  }
}
</style>
