<template>
  <draggable
    class="selected-forms-box"
    :list="selectedFormList"
    :group="'materails'"
  >
    <el-form class="material-form">
      <component
        :is="item.name"
        v-for="(item, index) in selectedFormList"
        :key="item.id"
        :class="{ 'is-editing': item.isEditing }"
      >
        <template slot="operate">
          <el-button type="text" @click="editFormItem(index)">
            <i class="el-icon-edit"></i
          ></el-button>
          <el-button type="text" @click="deleteFormItem(index)">
            <i class="el-icon-delete"></i
          ></el-button>
        </template>
      </component>
    </el-form>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import MText from "./materials/text/index.vue";
import MRadio from "./materials/radio/index.vue";
export default {
  components: {
    draggable,
    MText,
    MRadio,
  },
  data() {
    return {
      selectedFormList: [],
    };
  },
  methods: {
    handleAddCom({
      index,
      on = {},
      props = { materitalObj: { name: "", id: 0 } },
    }) {
      const {
        materitalObj: { id, name },
      } = props;
      this.$nextTick(() => {
        selectedFormList.push(materitalObj);
      });
    },
    editFormItem(index) {
      const formItem = this.selectedFormList[index];
      formItem.isEditing = true;
      console.log("1111");
      this.selectedFormList.forEach((item) => {
        item.isEditing = false;
      });
    },
  },
};
</script>

<style scoped>
.is-editing {
  background-color: #f2f5fe;
  border-color: #409eff;
  transition: all 0.3s ease-in-out;
}
::v-deep .material-form{
   display: flex;
   gap: 1rem;
   flex-direction: column;
}
::v-deep .material-form .el-form-item {
  border-radius: 0.25rem;
  margin-bottom: unset;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0 5rem 1fr 0;
}
.item-container .el-button{
  margin-left: 1rem;
}
</style>
