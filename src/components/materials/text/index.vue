<template>
  <div class="item-container">
    <el-form-item :label="form.label" >
      <el-input v-model="text" :placeholder="form.placeholder"></el-input>
    </el-form-item>
    <slot name="operate"></slot>
  </div>
</template>

<script>
export default {
  props: {
    attribute: {
      type: Object,
      default: () => {
        return { label: "文本框", placeholder: "" };
      },
    },
  },
  watch: {
    attribute: {
      handler(val) {
        console.log("attribute", val);
        this.$nextTick(() => {
          this.form = val;
          console.log(this.form);
        });
      },
      deep: true,
    },
  },
  data() {
    return {
      text: "",
      form: {
        label: "文本框",
        placeholder: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
