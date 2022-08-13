<template>
  <div>
    <div class="header">主页</div>
    <div class="main">
      <Content @toggleDrawer="toggleDrawer" />
    </div>
    <Drawer ref="drawer" />
  </div>
</template>

<script>
import Content from "./content.vue";
import Drawer from "./drawer.vue";
export default {
  components: {
    Content,
    Drawer,
  },
  methods: {
    toggleDrawer() {
      this.$refs["drawer"].toggleDrawer();
    },
  },
};
</script>

<style lang="scss" scoped></style>
