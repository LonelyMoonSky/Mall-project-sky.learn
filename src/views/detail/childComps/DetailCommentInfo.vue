<template>
  <div class="comment">
    <div class="header-title">
        <span>用户评论</span>
      </div>
    <div class="comment-info" v-for="(item, index) in commentInfo" :key="index">{{item.commentInfo}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    commentInfo: {
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
  .comment {
    margin-top: 10px;
  }

  .header-title {
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
    border-top: 1px solid #ccc;
    width: 100%;
    padding: 5px;
    text-align: center;
  }

  .comment-info {
    margin: 5px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
  }
</style>
