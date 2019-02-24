<template>
  <div class="container">
    <div class="navbar tun-navbar">tun.im</div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">不断提升！记录下每刻学习历程</h1>
          <h2 class="subtitle">今天是{{dateformat}} 广州 晴</h2>
        </div>
      </div>
    </section> 
    <div class="section">section</div>
    <div class="footer">fotter</div>
  </div>
</template>
<script>
import moment from 'moment';
export default {
    data(){
        return {
            dateformat: this.getDateFormat()
        }
    },
    created(){
        setInterval(()=>{
            this.dateformat = this.getDateFormat();
        },1000);
    },
    methods: {
        getDateFormat(){
            return moment().format("YYYY-MM-DD") ;
        }
    }
};
</script>
<style>
</style>