<template>
  <div class="tun-tabs-wrapper">
    <div class="tabs">
      <ul>
        <li :class="" v-for="(x,d) in list" :key="d">
          <a>Pictures</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {}
  }
};
</script>