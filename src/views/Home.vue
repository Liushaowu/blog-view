<template>
  <div class="home">
    <div class="page">
      <div class="content">
        <div class="item" v-for="(item) in 6" :key="item">
          <div class="title">Vue 搭建自己的博客系统 前台页面</div>
          <div class="intro">使用的Vue框架 系统现在正在建设中.... 每天进步一点点! 加油</div>
          <div class="operate">
            <div class="time">2020-03-15</div>
            <div class="user">&nbsp;· 88250 ·&nbsp;</div>
            <div class="tag">TENSORFLOW</div>
            <div class="tag">深度学习</div>
            <div class="tag">图片处理</div>
            <div class="comment">&nbsp;· 6 评论 ·&nbsp;</div>
            <div class="browse">187 浏览</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handlerClick() {}
  }
};
</script>

<style lang="scss" scoped>
.home {
  .page {
    height: 1000px;
    margin: 100px 530px;
    opacity: 0.9;
    border-radius: 10px;
    background: hsla(0, 0%, 100%, 0.9);
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
    .content {
      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 120px;
        padding: 20px;
        border-bottom: 1px solid #f0f2f7;
        .title {
          font-size: 24px;
          line-height: 24px;
          color: #15171a;
          font-weight: bold;
          text-align: left;
          font-family: Helvetica Neue, Luxi Sans, DejaVu Sans, Tahoma,
            Hiragino Sans GB, Microsoft Yahei, sans-serif;
        }
        .intro {
          font-size: 16px;
          text-align: left;
          line-height: 24px;
          margin: 10px 0;
          color: rgba(21, 23, 26, 0.8);
        }
        .operate {
          display: flex;
          font-size: 14px;
          justify-content: space-between;
          width: 500px;
          line-height: 20px;
          color: rgba(115, 138, 148, 0.8);
          .user {
            color: #77b6ff;
          }
        }
      }
    }
  }
}
</style>
