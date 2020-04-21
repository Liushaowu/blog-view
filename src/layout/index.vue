<template>
  <div class="app-wrapper">
    <div class="main-container">
      <vue-canvas-nest :config="config"></vue-canvas-nest>
      <div class="logo"></div>
      <Head />
      <app-main />
      <floor />
    </div>
  </div>
</template>

<script>
import { Head, Floor, AppMain } from "./components";
import vueCanvasNest from "vue-canvas-nest";

export default {
  name: "Layout",
  components: { Head, Floor, AppMain, vueCanvasNest },
  data() {
    return {
      config: {
        color: "0,0,255",
        opacity: 0.7,
        zIndex: -2,
        count: 300
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

body {
  font-family: Helvetica Neue, Luxi Sans, DejaVu Sans, Tahoma, Hiragino Sans GB,
    Microsoft Yahei, sans-serif;
  font-size: 14px;
}

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.logo {
  height: 100px;
  width: 200px;
  background-image: url("../assets/logo.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: absolute;
  left: 100px;
  opacity: 1 !important;
  z-index: 100;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>