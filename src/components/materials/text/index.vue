<template>
  <div>
    <el-form-item label="文本框">
      <el-input v-model="text"></el-input>
    </el-form-item>
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
