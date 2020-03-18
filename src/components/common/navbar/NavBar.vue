<template>
  <div class="nav-bar">
    <dir class="left"><slot name="left"></slot></dir>
    <dir class="center"><slot name="center"></slot></dir>
    <dir class="right"><slot name="right"></slot></dir>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>
  .nav-bar {
    display: flex;
    position: relative;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }

</style>
