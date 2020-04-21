<template>
  <div class="floor">
    <div class="text">
      ©2019-2020 dioxide.top 版权所有 网站备案号：
      <a
        class="text"
        href="http://beian.miit.gov.cn"
      >浙IC备19046360号</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.floor {
  width: 100%;
  height: 100px;
  line-height: 100px;
  margin-bottom: 0px; /* 等于footer的高度 */
  background: #000;
  opacity: 0.4;
  .text {
    color: #ffffff;
    font-size: 10px;
    text-decoration: none;
  }
}
</style>