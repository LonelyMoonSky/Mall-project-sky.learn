<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

import {getDetailMock, Goods, Shop} from 'network/detailMock'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      id: 'detail',
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  created() {
    // 1.保存传入的id
    // this.id = this.$route.params.id;

    // 2.通过id获取商品信息
      const message = this.$route.params.id;
      this.goods = new Goods(message)
      // console.log(this.goods);
    // 3.通过id获取店铺信息
    this.shop = new Shop(message)
      
    // 2.根据id请求mock里面模拟的详情数据
    getDetailMock(this.id).then(res => {
      // console.log(res.data[0]);
      // 1.获取顶部的轮播图的数据
      this.topImages = res.data[0].topImages

    })
  },
  mounted() {
    // getDetailMock().then(res => {
    //   console.log(res);
      
    // })
    },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>

</style>
