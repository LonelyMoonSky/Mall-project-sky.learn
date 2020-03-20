<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
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
  methods: {
    addToCart() {
      // console.log('加入购物车');
      this.$emit('addCart')
    }
  },
};
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background: #fff;
    position: relative;
    display: flex;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item div {
    flex: 1;
    line-height: 49px;
    text-align: center;
  }

  .cart {
    background: orange;
    font-weight: 600;
  }

  .buy {
    background: pink;
    font-weight: 800;
  }
</style>
