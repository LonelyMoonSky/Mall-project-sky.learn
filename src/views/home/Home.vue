<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"/>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature-view/>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomeFeatureView from './childComps/HomeFeatureView'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import Scroll from 'components/common/scroll/Scroll'

import NavBar from 'components/common/navbar/NavBar'

// 导入网络请求
// import {getHomeMultidata, getHomeGoods} from "network/home"
import {getHomeMultidata, getAllData} from "network/home"

// 导入封装好的防抖函数
import {debounce} from "common/utils/utils"

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created() {
    // 1.请求多个数据
    this.getMultidata()

    // 2.请求商品数据
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')

  },
  mounted() {
    // 一、图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    // 3.监听事件总线发出的事件 CoodsListItem中的图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })

  },
  computed:{
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  watch:{
  },
  methods: {   
    // 事件监听相关的方法
    
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 700

      // 2.决定tabControl是否吸顶（position: fixed）
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      // console.log('上拉加载更多');
      this.getGoods(this.currentType)

      this.$refs.scroll.finishPullUp()
    },
    swiperImageLoad() {
      // 获取tabControl的offsetTop.等HomeSwiper.vue里面的轮播图加载完成，才开始计算offsetTop，这样的高度才是正确的！（一般只监听轮播图加载完成就可以了，因为轮播图的加载是最慢的）
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // 网络请求相关的方法
    getMultidata() {
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    // getGoods(type) {
    //   const page = this.goods[type].page + 1
    //   getHomeGoods(type, page).then(res => {
    //     console.log('-首页- 流行/新款/精选 的商品的数据 -接口失效-');
    //     console.log(res);
    //     this.goods[type].list.push(...res.data.list);
    //     this.goods[type].page += 1
    
    //     // 在网络请求完数据以后，再次进行“上拉加载更多”的操作
    //     this.$refs.scroll.finishPullUp()
    // })
    // },
    getGoods(type) {
      getAllData(type).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data);
    
        // 在网络请求完数据以后，再次进行“上拉加载更多”的操作
        this.$refs.scroll.finishPullUp()
    })
    },
  },
};
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
