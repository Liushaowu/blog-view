<template>
  <div class="head">
    <div class="tags">
      <div
        :class="(tagging===item.name)?'tag tagging':'tag'"
        v-for="(item,index) in tags"
        :key="index"
        @click="handlerClick(item)"
      >{{item.label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      tagging: "Home",
      tags: [
        { name: "Home", label: "首页" },
        { name: "Category", label: "分类" },
        { name: "Record", label: "存档" },
        { name: "Tagboard", label: "标签墙" }
      ]
    };
  },
  watch: {
    tagging(newVal, oldVal) {
      if (newVal != oldVal) {
        this.$router.push({ name: newVal });
      }
    }
  },
  methods: {
    /**
     * 监听点击标签
     */
    handlerClick(e) {
      this.tagging = e.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  margin-top: 0px;
  background: #000;
  height: 100px;
  opacity: 0.4;
  position: relative;
  color: #ffffff;
  .tags {
    display: flex;
    position: absolute;
    left: 60%;
    line-height: 100px;
    width: 300px;
    justify-content: space-between;
    .tagging {
      color: #1dca96;
    }
    .tag {
      cursor: pointer;
    }
  }
}
</style>