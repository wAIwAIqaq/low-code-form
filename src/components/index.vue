<template>
  <div>
    <div class="header">
      生成表单
      <el-button
        @click="log"
        size="mini"
        type="primary"
        style="position: absolute; right: 4rem"
      >
        完成
      </el-button>
    </div>
    <div class="main">
      <main-box></main-box>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainBox from "./main.vue";
export default {
  components: {
    MainBox,
  },
  data() {
    return {
      input: "",
    };
  },
  computed: {
    ...mapState(["selectedFormList"]),
  },
  methods: {
    toggleDrawer() {
      this.$refs["drawer"].toggleDrawer();
    },
    log(){
      console.log(this.selectedFormList)
    }
  },
};
</script>

<style lang="scss" scoped></style>
