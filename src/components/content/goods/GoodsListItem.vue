<template>
    <!-- 接口没有失效时候的代码 -->
    <!-- <div>
      <img :src="goodsItem.show.img" alt="">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
    </div> -->

    <!-- 接口失效过后的伪代码 -->
    <div class="goods-list-item">
      <!-- 这里一定要记得用v-bind 动态绑定src -->
      <img :src="goodsItem" alt="">
    <div class="goods-info">
      <p>MIUCO波点网纱蕾丝衫拼接丝绒假两件连衣裙女装2020春装新款k</p>
      <span class="price">¥ 338.00</span>
      <span class="collect">1314</span>
    </div>
    </div>
</template>

<script>
export default {
  name: '',
  props: {
    // goodsItem: {
    //   type: Object,
    //   default() {
    //     return {}
    //   }
    // },
    goodsItem: {
      type: String,
      default() {
        return ''
      }
    },
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
  .goods-list-item {
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
