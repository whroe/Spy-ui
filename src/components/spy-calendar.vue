<template>
  <div class="calender">
    <div class="calenderHeader">
        <div class="leftBtn">&lt;</div>
        <div class="date">{{newDte}}</div>
        <div class="rightBtn">></div>
    </div>
    <!-- 日历头 -->
    <div class="calenderTitle">
      <div class="calenderItem" v-for="item of calenderTitel" :key="item+'week'">{{item}}</div>
    </div>
    <!-- 日历内容 -->
    <div class="calenderInside">
      <div :class="{calenderItem:true,CanlenderActive:nowDate == item}" v-for="item of calenderArray" :key="item+`date${item}`">{{item}}</div>
    </div>
  </div>
</template>

<script>
import util from "./util/util";
export default {
    name:'calendar',
    props:{
        width:{
            type:String,
            default:'100%'
        }
    },
    data(){
        return {
            // 获取当前时间戳(后期采用服务器时间)
            timestamp: (new Date()).getTime(),
            newDte:util.formatDate(+new Date()),
            // 当前年份
            nowYear: null,
            // 当前月份
            nowMonth: null,
            // 当前日期
            nowDate: null,
            // 当前星期
            nowDay: null,
            // 日期标题
            calenderTitel: ['日', '一', '二', '三', '四', '五', '六'],
            // 日期内容
            calenderArray: []
        }
    },
    created () {
        let that = this
        let timer = setInterval(() => {
            that.newDte =util.formatDate(+new Date()) ; // 修改数据date
        }, 1000)
        this.$once('hook:beforeDestroy',()=>{
            clearInterval(timer)
        })
        console.log(this.nowDate);
        
        // 将时间戳转换拆分为具体数值
        this.getNowDate()
    },
    methods:{
        // 拆分年月日星期
        getNowDate () {
        // 将时间戳转换为日期对象
        const theTime = typeof (timestamp) === 'object' ? this.timestamp : new Date(this.timestamp)
        this.nowYear = theTime.getFullYear()
        this.nowMonth = theTime.getMonth() + 1
        this.nowDate = theTime.getDate()
        this.nowDay = theTime.getDay() // 星期日为0,其余星期对应数值
        this.getFirstDay()
        },
        getFirstDay () {
        let firstDayWeek = null
        // 获取当月1号的星期
        firstDayWeek = new Date(this.nowYear + '/' + this.nowMonth + '/' + '01').getDay()
        console.log('当前月份1号的星期')
        console.log(firstDayWeek)
        // 当月天数
        let nowMonthDay = this.getNowMonthDay(this.nowYear, this.nowMonth)
        console.log('nowMonthDay')
        console.log(nowMonthDay)
        let arr = []
        // 根据当月1号的星期数来给渲染数组前面添加对应数量的空格
        for (let indexEmpty = 0; indexEmpty < parseInt(firstDayWeek); indexEmpty++) {
            arr.push('')
        }
        // 通过函数判断当前月份有多少天,并根据天数填充渲染数组
        for (let indexNum = 1; indexNum < nowMonthDay + 1; indexNum++) {
            arr.push(indexNum)
        }
        // 深拷贝日历渲染数组(由于后期可能会改成签到日历,数组的每一项可能是object所以深拷贝)
        this.calenderArray = JSON.parse(JSON.stringify(arr))
        },
        // 计算当前年份是否为闰年
        isLeapYear (year) {
        return (year % 400 === 0 || year % 4 === 0) && year % 100 !== 0
        },
        // 计算当前月份有多少天
        getNowMonthDay (year, month) {
        return [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (this.isLeapYear(year) ? 29 : 28)
        }
  },


    
}
</script>

<style lang='scss'>
.calender{
    .calenderHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        border-bottom: 1px solid #ebeef5;
    }
    .content{
        padding: 12px 20px 35px;
        .spy-header{
            display: flex;
            justify-content: space-between;
            .header-week{
                padding: 12px 0;
                color: #606266;
                font-weight: 400;
            }
        }
        .content-date{
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
        }
    }
}
// 实现每行7个自动换行
.calenderTitle, .calenderInside{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 700px;
}
.calenderItem{
  width: 100px;
  height: 100px;
  cursor: pointer;
  text-align: center;
    line-height: 100px;
}
.calenderItem:hover{
    background: rgb(25, 64, 235);
}
.CanlenderActive{
    background: red;
    color: #fff;
}
</style>