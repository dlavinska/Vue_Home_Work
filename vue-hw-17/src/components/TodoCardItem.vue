<template #header>
  <el-card>
    <div class="clearfix">
      <b>#{{item.id}} - {{item.title}}</b>
    </div>
    <hr>
    <div class="text item">
      {{ item.description }}
    </div>
    <hr>
    <div><b>{{item.status}}</b></div>
    <hr>
    <el-button type="danger" @click="removeTodoItem(item, index)">Remove</el-button>
  </el-card>

</template>

<script>
import { ElCard, ElButton } from "element-plus";
import { todoStatuses } from "../common/options.js";

export default {
  name: 'TodoCardItem',
  components: {
    ElCard,
    ElButton
  },
  props: {
    item: {
      id: { type: Number },
      title: { type: String },
      description: { type: String },
      status: {type: String}
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    todoStatuses() {
      return todoStatuses;
    }
  },
  methods: {
    removeTodoItem(item, index) {
      this.$emit('removeTodo', item, index);
    }
  }
}
</script>