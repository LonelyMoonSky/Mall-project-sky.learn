<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: '',
      isShow: false
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    show(message = '默认文字', duration = 1500) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  },
};
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;

    z-index: 999999;

    background-color: rgba(0, 0, 0, .75);
    color: #fff;
  }
</style>
