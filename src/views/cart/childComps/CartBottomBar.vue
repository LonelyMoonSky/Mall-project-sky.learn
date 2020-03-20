<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" @click.native="checkClick" class="check-button"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      总计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      提交订单({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
  name: '',
  components: {
    CheckButton
  },
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.$store.getters.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      // 方案1
      // if (this.cartList.length === 0) return false
      // return !(this.cartList.filter(item => !item.checked).length)
      // 方案2 (推荐)
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    }
  },
  watch:{
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show('请选中需要购买的商品', 2000)
      }
    }
  },
};
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;

    height: 40px;
    line-height: 40px;

    background-color: #eee;

    font-size: 14px;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .total-price {
    flex: 1;
    margin-left: 20px;
    color: red;
  }

  .calculate {
    width: 90px;
    background-color: red;
    color: #fff;
    text-align: center;;
  }
</style>
