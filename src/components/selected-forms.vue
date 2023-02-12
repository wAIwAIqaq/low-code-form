<template>
  <div class="marterial-box">
    <el-form class="material-form" style="height: 100%">
      <draggable
        class="selected-forms-box"
        :list="selectedFormList"
        :group="'materails'"
      >
        <component
          :is="item.name"
          v-for="(item, index) in selectedFormList"
          :key="item.id"
          :class="{ 'is-editing': item.isEditing }"
          :attribute="item.attr"
        >
          <template slot="operate">
            <el-button type="text" @click="editFormItem(index)">
              <i class="el-icon-edit"></i
            ></el-button>
            <el-button
              type="text"
              @click="deleteFormItem(index)"
              style="margin-right: 1rem"
            >
              <i class="el-icon-delete"></i
            ></el-button>
          </template>
        </component>
      </draggable>
    </el-form>
    <edit-drawer
      :visible="showDrawer"
      :form-item-set-obj="formItemSetObj"
      @close-set-drawer="closeSetDrawer"
      @set-form-item="setFormItem"
      :index="curIndex"
    ></edit-drawer>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import MText from "./materials/text/index.vue";
import MRadio from "./materials/radio/index.vue";
import EditDrawer from "./edit-drawer.vue";
export default {
  components: {
    draggable,
    MText,
    MRadio,
    EditDrawer,
  },
  data() {
    return {
      selectedFormList: [],
      showDrawer: false,
      formItemSetObj: {},
      curIndex: 0
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
    },
    editFormItem(index) {
      const formItem = this.selectedFormList[index];
      this.selectedFormList.forEach((item) => {
        item.isEditing = false;
      });
      formItem.isEditing = true;
      this.showDrawer = true;
      console.log("selectedFormList", this.selectedFormList);
      this.curIndex = index;
      this.formItemSetObj = this.selectedFormList[index].attr || {
        label: "文本框",
        placeholder: "",
      };
    },
    closeSetDrawer(bool) {
      this.showDrawer = bool;
      this.selectedFormList.forEach((item) => {
        item.isEditing = false;
      });
    },

    setFormItem(val, index = 0) {
      console.log(val, index);
      this.selectedFormList[index].attr = val;
      console.log("setFormItem", this.selectedFormList[index]);
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
::v-deep .material-form .selected-forms-box {
  display: grid;
  gap: 0.5rem;
}
::v-deep .material-form .el-form-item {
  border-radius: 0.25rem;
  margin-bottom: unset;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0 5rem 1fr 0;
}
::v-deep .material-form .el-form-item .el-form-item__label{
   padding-left:1rem
}
.item-container .el-button {
  margin-left: 1rem;
}
</style>
