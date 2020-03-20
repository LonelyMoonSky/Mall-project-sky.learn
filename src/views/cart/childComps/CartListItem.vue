<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button @click.native="checkClick" :is-checked="product.checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{product.price.toFixed(2)}}</div>
        <div class="item-count">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: '',
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  },
};
</script>

<style scoped>
  #shop-item {
    display: flex;
    padding: 10px;
    height: 120px;
    border-bottom: 2px solid #ccc;
  }

  .item-selector {
    width: 30px;
    padding-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img {
    flex: 2;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    border-radius: 10px;
  }

  .item-info {
    flex: 7;
    display: flex;
    flex-direction: column;
    padding: 2px 0 2px 10px;
    height: 100px;
  }

  .item-title {
    flex: 1;
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    padding-top: 5px;
  }

  .info-bottom {
    flex: 1;
    height: 10px;
    display: flex;
    line-height: 50px;
    margin-top: 20px;
    justify-content: space-between;
  }

  .item-price {
    font-size: 18px;
    color: red;
  }
  
  .item-count {
    font-size: 16px;
  }
</style>
