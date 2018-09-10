<template>
  <div id="calendar">
    <div>
      <button v-on:click="getDate()">更新时间:</button>
      <span>{{nowDate}}</span>
    </div>
    <div>
      <span>{{year}}年{{month}}月{{date}}日 </span>
      <span>星期{{day}}</span>
      <span>{{hour}}时{{minutes}}分{{seconds}}秒</span>
    </div>
    <div>
      <span>.toUTCString(): {{UTCTime}}</span>
    </div>
    <div>
      <span>+new Date(): {{pushDate}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowDate: new Date(),
      formatDay: {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六'
      }
    }
  },
  computed: {
    year () {
      return this.nowDate.getFullYear()
    },
    month () {
      return this.nowDate.getMonth() + 1
    },
    date () {
      return this.nowDate.getDate()
    },
    day () {
      return this.formatDay[this.nowDate.getDay()]
    },
    hour () {
      return this.nowDate.getHours()
    },
    minutes () {
      return this.nowDate.getMinutes()
    },
    seconds () {
      return this.nowDate.getSeconds()
    },
    UTCTime () {
      return this.nowDate.toUTCString()
    },
    pushDate () {
      return +this.nowDate
    }
  },
  created () {
    // setInterval(() => {
    //   this.nowDate = new Date()
    // }, 1000)
  },
  methods: {
    getDate () {
      const nowDate = new Date()
      this.nowDate = nowDate
    }
  }
}
</script>
