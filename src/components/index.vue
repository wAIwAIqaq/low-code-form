<template>
  <div>
    <div class="header">主页</div>
    <div class="main">
      <Content @toggleDrawer="toggleDrawer" />
    </div>
    <Drawer ref="drawer">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <slot>
        11111111
        <el-input v-model="input" type="text"></el-input>
      </slot>
    </Drawer>
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
  data() {
    return {
      input: "",
    };
  },
  methods: {
    toggleDrawer() {
      this.$refs["drawer"].toggleDrawer();
    },
  },
};
</script>

<style lang="scss" scoped></style>
