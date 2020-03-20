<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <div class="title">{{shop.name + '旗舰店'}}</div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr>
            <td>{{shop.name + '旗舰店'}}</td>
            <td>{{shop.score + '分'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    shop: {
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
  methods: {},
};
</script>

<style scoped>
  .shop-info {
    padding: 10px;
  }

  .shop-top {
    height: 80px;
    display: flex;
    align-items: center;
  }

  .shop-top img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  .shop-top .title {
    text-align: center;
    font-size: 20px;
    margin-left: 10px;
    font-weight: 600;
  }

  .shop-middle {
    display: flex;
    padding: 20px;
    margin-bottom: 10px;
    background-color: #eee;
    border-radius: 20px;
  }

  .shop-middle-item {
    height: 100px;
    flex: 1;
  }

  .shop-middle-left {
    margin-top: 10px;
    padding: 10px;
    display: flex;
    border-right: 1px solid #ccc;
  }

  .info-sells, .info-goods {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-around;
  }

  .sells-count, .sells-text {
    flex: 1;
    
  }

  .goods-count, .goods-text {
    flex: 1;
  }

  .sells-count, .goods-count {
    font-size: 18px;
    font-weight: 600;
    color: black;
  }

  .sells-text, .goods-text {
    font-size: 16px;
    font-weight: 400;
    color: black;
  }

  .shop-middle-right {
    font-size: 16px;
    line-height: 100px;
    margin-left: 20px;
  }

  .shop-bottom {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .enter-shop {
    font-size: 20px;
    font-weight: 800;
    background-color: #eee;
    border-radius: 10px;
  }
</style>
