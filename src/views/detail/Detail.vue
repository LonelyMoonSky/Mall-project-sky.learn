<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info ref="goods" :detail-images="detailImages" @imageLoad="imageLoad"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-recommend-info ref="recommend" :recommend="recommend"/>
    </scroll>

    <detail-bottom-bar @addCart="addCart"/>

    <back-top class="back-top" @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommendInfo from './childComps/DetailRecommendInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'

import {getDetailMock, Goods, Shop} from 'network/detailMock'

// 导入封装好的防抖函数
import {debounce} from "common/utils/utils"

// 导入混入mixin.js文件
import {itemListenerMixin, backTopMixin} from "common/mixin"

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      id: 'detail',
      topImages: [],
      goods: {},
      shop: {},
      detailImages: [],
      commentInfo: [],
      recommend: [],
      themeTopYs: [],
      currentIndex: 0
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
      // 4.获取参数的图片数据
      this.detailImages = res.data[0].detailImages
      // console.log(res.data[0].detailImages);
      // 5.获取评论信息
      if (res.data[0].commentInfo.length !== 0){
        this.commentInfo = res.data[0].commentInfo
        // console.log(res.data[0].commentInfo);
      }
      // 6.获取推荐数据
      this.recommend = res.data[0].recommend

    //   this.$nextTick(() => {
    //     // 根据最新的数据，对应的DOM是已经渲染出来了，但是图片依然是没有加载完的！
    //     // offsetTop值不对，一般都是因为图片没有加载完的原因
    //     this.themeTopYs = []

    // this.themeTopYs.push(0);
    // this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

    // console.log(this.themeTopYs);

    //   })

    })
  },
  mounted() {
  },
  updated() {
    
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  computed:{
  },
  watch:{
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()

      // 获取正确的offsetTop
      this.themeTopYs = []
    this.themeTopYs.push(0);
    this.themeTopYs.push(this.$refs.goods.$el.offsetTop - 44);
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
    this.themeTopYs.push(Number.MAX_VALUE);
    // console.log(this.themeTopYs);

    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    contentScroll(position) {

      // 显示是否返回顶部 判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 700

      // console.log(position);
      // 1.获取y值
      const positionY = -position.y

      // 2.positionY和主题中的值进行对比
      let length = this.themeTopYs.length
      for(let i = 0; i < length-1; i++){

        // if (this.currentIndex !== i && ((i < length -1 && positionY >= this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[parseInt(i)]))){
        //   this.currentIndex = i
        //   // console.log(this.currentIndex);
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
        // 优化if判断算法
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      
    },
    addCart() {
      // console.log('加入购物车');
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.goods.image;
      product.title = this.goods.title;
      product.price = this.goods.newPrice;
      product.iid = this.goods.iid;
      // console.log(product);
      
      // 2.将商品添加到购物车
      // 传到vuex的mutations里面
      // this.$store.commit('addCart', product)
      // 传到vuex的actions里面
      this.$store.dispatch('addCart', product)
    }
  },
};
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }

  .back-top {
    margin: 0 26px 54px 0;
  }
</style>
