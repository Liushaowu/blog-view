<template>
  <div class="tagboard">
    <div class="statistics">{{list.length}} 个标签</div>
    <div class="page">
      <div class="content">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="text">
            <a class="date">{{item.name}}</a> -
            <b>{{item.articleCount}}</b> 篇
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tagboard",
  data() {
    return {
      list: [
        { name: "mysql", articleCount: 100 },
        { name: "orign", articleCount: 100 },
        { name: "NetBeans", articleCount: 100 },
        { name: "Maven", articleCount: 100 },
        { name: "Portal & Portlet", articleCount: 100 },
        { name: "Text Categorization", articleCount: 100 },
        { name: "Web", articleCount: 100 }
      ]
    };
  },
  computed: {
    count: function() {
      let arr = this.list.map(item => item.articleCount);
      return eval(arr.join("+"));
    }
  }
};
</script>
<style lang="scss" scoped>
.tagboard {
  .statistics {
    margin-top: 40px;
    color: #738a94;
    font-size: 14px;
  }
  .page {
    margin: 30px 530px;
    opacity: 0.9;
    border-radius: 10px;
    background: hsla(0, 0%, 100%, 0.9);
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
    .content {
      display: flex;
      padding: 30px 30px;
      text-align: left;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      .item {
        margin: 10px 10px;
        border-radius: 10px;
        background: hsla(0, 18%, 80%, 0.9);
        box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
          1px 3px 8px rgba(39, 44, 49, 0.03);
        cursor: pointer;
        .text {
          line-height: 20px;
          font-size: 14px;
          color: #738a94;
          margin: 0 8px;
        }
        .b {
          font-weight: bold;
        }
      }
    }
  }
}
</style>