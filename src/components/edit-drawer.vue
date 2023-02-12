<template>
  <el-drawer
    title="设置表单"
    :visible.sync="showDrawer"
    direction="btt"
    :before-close="handleClose"
    :modal="false"
  >
    <el-form class="form">
      <el-form-item label="表单项名">
        <el-input v-model="settingForm.label"></el-input>
      </el-form-item>
      <el-form-item label="输入框占位符">
        <el-input v-model="settingForm.placeholder"></el-input>
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
    index:{
      type: Number,
      default: 0
    }
  },
  watch: {
    visible: {
      handler(val) {
        this.showDrawer = val;
      },
    },
    formItemSetObj: {
      handler(val) {
        console.log("formItemSetObj", val);
        this.settingForm = val;
      },
      immediate: true,
    },
    settingForm: {
      handler(val) {
        console.log("settingForm", val);
        this.$emit("set-form-item", val, this.index);
      },
      deep: true,
    },
  },
  data() {
    return {
      showDrawer: false,
      settingForm: {
        label: "",
      },
    };
  },
  methods: {
    handleClose() {
      this.$emit("close-set-drawer", false);
    },
  },
};
</script>

<style scoped>
::v-deep.form {
  display: grid;
  padding: 0 2rem;
  grid-auto-flow: column;
  gap: 1rem;
  grid-template-columns: repeat(4, 25%);
}
</style>
