<template>
  <div class="container">
    <div class="navbar tun-navbar">tun.im</div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">tun.im 记录我的工作与生活</h1>
          <h2 class="subtitle">今天是{{dateformat}} 广州 晴</h2>
        </div>
      </div>
    </section>
    <div class="section tun-nopd">section</div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          本网站所有源码已上传至<a href="https://github.com/tun100/tun-im">Github仓库</a>里，搭配Travis自动构建工具实时持续部署
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      dateformat: this.getDateFormat()
    };
  },
  created() {
    setInterval(() => {
      this.dateformat = this.getDateFormat();
    }, 1000);
  },
  methods: {
    getDateFormat() {
      return moment().format("YYYY-MM-DD");
    }
  }
};
</script>
<style>
</style>