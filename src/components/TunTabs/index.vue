<template>
  <div class="tun-tabs-wrapper">
    <div class="tabs">
      <ul>
        <li @click="tmpactive = x.value" :class="x.value == active ? 'is-active':''" v-for="(x,d) in list" :key="d">
          <a>{{x.label}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tmpactive: undefined
    };
  },
  props: {
    list: {}
  }
};
</script>