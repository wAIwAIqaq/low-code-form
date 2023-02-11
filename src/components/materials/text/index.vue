<template>
  <div class="item-container">
    <el-form-item label="文本框">
      <el-input v-model="text"></el-input>
    </el-form-item>
    <slot name="operate"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
