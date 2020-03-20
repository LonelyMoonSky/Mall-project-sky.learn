<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      总计：{{totalPrice}}
    </div>
    <div class="calculate">
      提交订单({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

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
    totalPrice() {
      return '￥' + this.$store.getters.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    }
  },
  watch:{
  },
  methods: {},
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
