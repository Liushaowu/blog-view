<template>
  <div class="category">
    <div class="statistics">{{list.length}}个分类</div>
    <div class="page">
      <div class="content">
        <div class="item" v-for="(item,index) in list" :key="index">
          {{item.name}} -
          <b>{{item.tagCount}}</b> 标签
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Category",
  data() {
    return {
      list: [
        { name: "编程语言", tagCount: 100 },
        { name: "往事与总结", tagCount: 100 },
        { name: "开源项目", tagCount: 100 },
        { name: "Linux", tagCount: 100 },
        { name: "架构设计", tagCount: 100 },
        { name: "数据库", tagCount: 100 }
      ]
    };
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
      flex-direction: column;
      justify-content: space-around;
      padding: 30px 30px;
      text-align: left;
      .item {
        font-size: 14px;
        line-height: 30px;
        color: #738a94;
        .b {
          font-weight: bold;
        }
      }
    }
  }
}
</style>