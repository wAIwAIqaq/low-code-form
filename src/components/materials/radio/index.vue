<template>
  <div>
    <el-form-item label="单选框">
      <el-radio v-model="selected">值1</el-radio>
    </el-form-item>
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
