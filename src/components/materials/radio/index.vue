<template>
  <div class="item-container">
    <el-form-item label="单选框">
      <el-radio v-model="selected">值1</el-radio>
    </el-form-item>
    <slot name="operate"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
