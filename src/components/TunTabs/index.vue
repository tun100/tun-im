<template>
  <div class="tun-tabs-wrapper">
    <div class="tabs">
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
    <slot :name="x.value" v-show="x.value == active" v-for="(x,d) in list" :key="d">
        
    </slot>
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
      if (
        _.isNil(tmpactive) ||
        _.isNil(_.find(this.list, x => x.value == tmpactive))
      ) {
        if (!_.isEmpty(this.list)) {
          tmpactive = this.tmpactive = _.get(this, ["list", 0, "value"]);
        }
      }
      return tmpactive;
    }
  },
  props: {
    list: {}
  }
};
</script>