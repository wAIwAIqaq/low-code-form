<template>
  <el-drawer
    title="设置表单"
    :visible.sync="showDrawer"
    direction="btt"
    :before-close="handleClose"
    :modal="false"
  >
    <el-form style="display:flex">
      <el-form-item label="表单项名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="输入框占位符">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    formItemSetObj: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    visible: {
      handler(val) {
        this.showDrawer = val;
      },
    },
  },
  data() {
    return {
      showDrawer: false,
    };
  },
  methods: {
    handleClose() {},
  },
};
</script>

<style lang="scss" scoped></style>
