<template>
  <div class="category">
    <div class="statistics">{{list.length}} 个月 {{count}} 篇文章</div>
    <div class="page">
      <div class="content">
        <div class="item" v-for="(item,index) in list" :key="index">
          <a class="date">{{item.date}}</a>
          <a>{{item.articleCount}}</a> 篇文章
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Record",
  data() {
    return {
      list: [
        { date: "2020 年 3 月", articleCount: 100 },
        { date: "2020 年 4 月", articleCount: 100 },
        { date: "2020 年 5 月", articleCount: 100 },
        { date: "2020 年 6 月", articleCount: 100 },
        { date: "2020 年 7 月", articleCount: 100 },
        { date: "2020 年 8 月", articleCount: 100 },
        { date: "2020 年 6 月", articleCount: 100 },
        { date: "2020 年 7 月", articleCount: 100 },
        { date: "2020 年 8 月", articleCount: 100 },
        { date: "2020 年 6 月", articleCount: 100 },
        { date: "2020 年 7 月", articleCount: 100 },
        { date: "2020 年 8 月", articleCount: 100 },
        { date: "2020 年 6 月", articleCount: 100 },
        { date: "2020 年 7 月", articleCount: 100 },
        { date: "2020 年 8 月", articleCount: 100 },
        { date: "2020 年 8 月", articleCount: 100 },
        { date: "2020 年 8 月", articleCount: 100 }
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
.category {
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
      justify-content: flex-start;
      padding: 30px 30px;
      text-align: left;
      flex-wrap: wrap;
      .item {
        font-size: 14px;
        line-height: 40px;
        color: #738a94;
        width: 200px;
        .date {
          cursor: pointer;
          color: aqua;
        }
        .date:hover {
          border-bottom: 1px solid aqua;
        }
        .b {
          font-weight: bold;
        }
      }
    }
  }
}
</style>