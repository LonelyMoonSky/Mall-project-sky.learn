<template>
    <!-- 接口没有失效时候的代码 -->
    <div class="goods-list-item" @click="itemClick">
      <img v-lazy="goodsItem.image" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{'￥'+ goodsItem.newPrice}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
    </div>
</template>

<script>
export default {
  name: '',
  props: {
    goodsItem: {
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
    imageLoad() {
      // 用事件总线发送一个事件,然后在Home.vue里面监听这个事件
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push({
        name: '/detail',
        params: {
          id: this.goodsItem
        }
      })
    }
  },
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
