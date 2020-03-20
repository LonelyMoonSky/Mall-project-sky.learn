<template>
  <div>
    <div class="detail-images">
      <div class="detail-info">
        <span>商品参数</span>
      </div>
      <img v-for="(item, index) in detailImages" :key="index" :src="item.image" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    detailImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    imgLoad() {
      // console.log('这里要加载12次，因为有12张图片');
      if (++this.counter === this.imagesLength) {
        this.$emit('imageLoad')
        // console.log('这里只加载1次，要等所有图片加载完以后，再加载');
      }
    }
  },
  watch: {
    detailImages() {
      this.imagesLength = this.detailImages.length
    }
  }
};
</script>

<style scoped>
  .detail-info {
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
    border-top: 1px solid #ccc;
    width: 100%;
    padding: 5px;
    text-align: center;
  }
</style>
