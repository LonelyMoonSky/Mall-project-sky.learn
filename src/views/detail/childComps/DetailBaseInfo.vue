<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{'￥' + goods.newPrice}}</span>
      <span class="o-price">{{'￥' + goods.oldPrice}}</span>
      <span v-if="goods.discountDesc" class="discount">{{goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{'销量 ' + goods.columns}}</span>
      <span>{{'收藏' + goods.cfav + '人'}}</span>
      <span>{{goods.services}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    goods: {
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
  .base-info {
    padding: 10px;
  }

  .info-title {
    font-weight: 600;
    color: black;
    font-size: 18px;
  }

  .info-price {
    margin-top: 14px;
  }

  .n-price {
    font-size: 30px;
    color: pink;
  }

  .o-price {
    margin-left: 5px;
    font-size: 14px;
    color: pink;
    text-decoration: line-through;
  }

  .discount {
    margin-left: 5px;
    padding: 3px;
    font-size: 4px;
    color: #fff;
    background-color: red;
    border-radius: 8px;
  }

  .info-other {
    display: flex;
    margin-top: 20px;
    color: #aaa;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .info-other span {
    flex: 1;
    text-align: center;
  }
</style>
