<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature-view></home-feature-view>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>

      <!-- <goods-list :goods="showGoods"></goods-list> -->
      <goods-list :goods="showGoods"></goods-list>
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
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import NavBar from 'components/common/navbar/NavBar'

// 导入网络请求
import {getHomeMultidata} from "network/home"
// import {getHomeMultidata, getHomeGoods} from "network/home"

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
        // 'pop': {page: 0, list: []},
        // 'new': {page: 0, list: []},
        // 'sell': {page: 0, list: []},
        'pop': {page: 0, list: [], src: 'https://img.alicdn.com/imgextra/i4/671012022/O1CN01zsrbXl1Qo7PohRf69_!!671012022.jpg_400x400.jpg'},
        'new': {page: 0, list: [], src: 'https://gd2.alicdn.com/imgextra/i2/671012022/O1CN01PQ5hSu1Qo7QzwQV94_!!0-item_pic.jpg_400x400.jpg'},
        'sell': {page: 0, list: [], src: 'https://gd3.alicdn.com/imgextra/i3/1971883128/O1CN01zECCtJ1YyfSrj4Z86_!!1971883128.jpg_400x400.jpg'},
      },
      currentType: 'pop',
      isShowBackTop: false
    };
  },
  created() {
    // 1.请求多个数据
    this.getMultidata()

    // 2.请求商品数据
    // this.getGoods('pop')
    // this.getGoods('new')
    // this.getGoods('sell')
  },
  computed:{
    showGoods() {
      // return this.goods[this.currentType].list
      return this.goods[this.currentType].src
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
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 700
    },
    loadMore() {
      console.log('上拉加载更多');
      // this.getGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
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
    // 
    //     在网络请求完数据以后，再次进行“上拉加载更多”的操作
    //     this.$refs.scroll.finishPullUp()
    // })
    // }
  },
};
</script>

<style scoped>
  #home {
    padding-top: 44px;
    position: relative;
    height: 100vh;
    /* padding-bottom: 49px; */
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>
