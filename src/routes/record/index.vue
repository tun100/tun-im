<template>
  <div class="container">
    <div class="navbar tun-navbar">tun.im</div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">记录下我的工作与生活</h1>
          <h2 class="subtitle">今天是{{dateformat}} 广州 晴</h2>
        </div>
      </div>
    </section>
    <div class="section tun-nopd tun-tab-wrapper">
      <div v-for="(x,d) in querylist" :slot="d" :key="d">{{d}}</div>
      <TunTabs :list="tablist">
        <div v-for="(x,d) in querylist" :slot="d" :key="d">
          <TunTable v-bind="x"/>
        </div>
      </TunTabs>
    </div>
    <footer class="footer tun-footer">
      <div class="content has-text-centered">
        <p>
          本网站所有源码已同步至
          <a target="_blank" href="https://github.com/tun100/tun-im">Github仓库</a>里，使用了bulma的CSS框架以及
          <a
            target="_blank"
            href="https://github.com/tun100/tun-im/blob/master/package.json"
          >相关依赖</a>，并采用travis实现自动持续部署。
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import moment from "moment";
import _ from "lodash";
var rawTabListSource = ["JS前端", "Java后端", "计算机网络", "小工具"];

export default {
  data() {
    var querylist = _.chain(rawTabListSource)
      .mapKeys((x, d) => x)
      .mapValues(x => ({
        column: _.map(
          ["记录类型", "记录名称", "记录描述", "添加日期", "操作"],
          x => ({ label: x, value: x })
        ),
        data: [],
        ctn: 0
      }))
      .value();
      debugger;
    return {
      dateformat: this.getDateFormat(),
      querylist
    };
  },
  computed: {
    tablist() {
      return _.map(rawTabListSource, x => {
        return {
          label: x,
          value: x
        };
      });
    }
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