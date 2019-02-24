<template>
  <div class="tun-tabs-wrapper">
    <div class="tabs tun-nomb">
      <ul>
        <li
          @click="tmpactive = x.value"
          :class="x.value == active ? 'is-active':''"
          v-for="(x,d) in list"
          :key="d"
        >
          <a>{{x.label}}</a>
        </li>
      </ul>
    </div>
    <div v-show="x.value == active" v-for="(x,d) in list" :key="d">
      <slot :name="x.value">
        <div class="tun-tabs-item" :key="d">"{{x.label}}" 当前空空如也...</div>
      </slot>
    </div>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  data() {
    return {
      tmpactive: undefined
    };
  },
  computed: {
    active() {
      var { tmpactive } = this;
      return tmpactive;
    }
  },
  watch: {
    tmpactive: {
      immediate: true,
      handler(tmpactive) {
        if (
          _.isNil(tmpactive) ||
          _.isNil(_.find(this.list, x => x.value == tmpactive))
        ) {
          if (!_.isEmpty(this.list)) {
            tmpactive = this.tmpactive = _.get(this, ["list", 0, "value"]);
          }
        }
      }
    }
  },
  props: {
    list: {}
  }
};
</script>