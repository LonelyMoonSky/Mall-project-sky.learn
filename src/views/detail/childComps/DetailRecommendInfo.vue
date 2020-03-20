<template>
  <div>
    <div class="text-recommend">
      <span>推荐信息</span>
    </div>
    <detail-goods-list :goods="recommend"/>
  </div>
</template>

<script>
import DetailGoodsList from 'components/content/goods/GoodsList'

export default {
  name: '',
  components: {
    DetailGoodsList
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
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
  .text-recommend {
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
    border-top: 1px solid #ccc;
    width: 100%;
    padding: 5px;
    text-align: center;
  }
</style>
