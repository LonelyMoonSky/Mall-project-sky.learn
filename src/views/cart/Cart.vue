<template>
  <div class="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{length}})</div></nav-bar>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
  name: '',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters({
      length: 'cartLength'
    })
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
