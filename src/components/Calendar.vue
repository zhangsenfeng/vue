<template>
  <div id="calendar">
    <div>
      <input type="text" :placeholder="year" v-model="inputYear">
      <span>年</span>
      <input type="text" :placeholder="month + 1" v-model="inputMonth">
      <span>月</span>
    </div>
    <table>
      <tr>
        <th v-for="(week, weekIndex) of formatDay" :key="`week${weekIndex}_cn`" class="title">{{week}}</th>
      </tr>
      <tr v-for="(week, weekIndex) of monthCalendar" :key="`week${weekIndex}`">
        <td v-for="(day, dayIndex) of week" :key="`day${dayIndex}`" :class="{'b_red': day.today, 'thisMonth': day.thisMonth, date}">{{day.date}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowDate: new Date(),
      formatDay: ['日', '一', '二', '三', '四', '五', '六'],
      inputYear: new Date().getFullYear(),
      inputMonth: new Date().getMonth() + 1
    }
  },
  computed: {
    year () {
      if (!this.inputYear) {
        return this.nowDate.getFullYear()
      } else {
        return this.inputYear
      }
    },
    month () {
      if (!this.inputMonth) {
        return this.nowDate.getMonth()
      } else {
        return this.inputMonth - 1
      }
    },
    date () {
      return this.nowDate.getDate()
    },
    day () {
      return this.formatDay[this.nowDate.getDay()]
    },
    // hour () {
    //   return this.nowDate.getHours()
    // },
    // minutes () {
    //   return this.nowDate.getMinutes()
    // },
    // seconds () {
    //   return this.nowDate.getSeconds()
    // },
    // 判断本月第一天是星期几
    firstDay () {
      return new Date(this.year, this.month, 1).getDay()
    },
    // 判断是否闰年
    isLaepYear () {
      if (((this.year % 4 === 0) && (this.year % 100 !== 0)) || (this.year % 400 === 0)) {
        return true
      } else {
        return false
      }
    },
    // 一年中每个月的天数
    monthDayArr () {
      const arr = [31, this.isLaepYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      return arr
    },
    // 月历数组
    monthCalendar () {
      // 先创建一个二维数组，外层数组每一项都是数组，代表从周日到周六的七天
      // 内层数组每一项都是数字，代表是几号
      let monthArr = []
      for (let row = 1; row <= 6; row++) {
        monthArr.push(new Array(7))
      }
      // 将本月第一天放入数组
      monthArr[0][this.firstDay] = {date: 1, thisMonth: true}
      if (this.date === 1) {
        monthArr[0][this.firstDay].today = true
      }
      // 用上个月的日期填满第一周
      for (let index = 0; index < 7; index++) {
        if (!monthArr[0][index]) {
          const day = this.monthDayArr[this.month >= 1 ? this.month - 1 : 11] - (this.firstDay - index - 1)
          monthArr[0][index] = {date: day, lastMonth: true}
        } else {
          break
        }
      }
      // 将剩余日期填入数组
      let day = 1
      let nextMonthDay = 1
      for (let weekIndex = 0; weekIndex < 6/* 一共六周 */; weekIndex++) {
        for (let dayIndex = 0; dayIndex < 7/* 每周七天 */; dayIndex++) {
          if (!monthArr[weekIndex][dayIndex]) {
            if (day < this.monthDayArr[this.month]) {
              // 将本月的日期填入数组
              day++
              monthArr[weekIndex][dayIndex] = {date: day, thisMonth: true}
              if (this.date === day) {
                monthArr[weekIndex][dayIndex].today = true
              }
            } else {
              // 用下月日期填满剩余数组
              monthArr[weekIndex][dayIndex] = {date: nextMonthDay, lastMonth: true}
              nextMonthDay++
            }
          }
        }
      }
      return monthArr
    }
  },
  watch: {
    inputYear (value) {
      const number = this.digitalCheck(value, 0)
      this.inputYear = number
    },
    inputMonth (value) {
      const number = this.digitalCheck(value, 0, 12)
      this.inputMonth = number
    }
  },
  methods: {
    // 数字校验
    digitalCheck (value, min, max) {
      // 将value转换为字符串
      value += ''
      // 去除数字外的其他字符
      value = value.replace(/[^0-9]/g, '')
      // 去除字符串前的0
      value = value.replace(/^0+/, '')
      // 将字符串转为数字
      parseInt(value, 10)
      if (min && value <= min) {
        value = min
      }
      if (max && value >= max) {
        value = max
      }
      return value
    }
  }
}
</script>

<style lang="scss" scoped>
.b_red {
  background-color: red;
}
th, td {
  text-align: center;
}
td.date:not(.thisMonth) {
  color: #999;
}
input {
  width: 50px;
}
</style>
