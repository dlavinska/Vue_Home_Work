<template>
  <el-container>
    <el-header> <h1>Todo List:</h1></el-header>
    <el-main>
      <el-row>
        <el-col :span="16">
          <todo-form @setTodoItems="handleSetTodoItems"/>
        </el-col>
        <el-col :span="16">
          <el-row :gutter="20">
            <el-col v-for="(item, index) in todoItems" :span="8" style="margin-bottom: 20px; margin-top: 20px" :key="item.id">
              <todo-card-item :item="item" :index="index" @removeTodo="handleRemoveTodoItem"/>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

</template>

<script>
import { ElHeader, ElMain, ElContainer, ElRow, ElCol } from "element-plus";
import TodoForm from "./TodoForm.vue";
import TodoCardItem from "./TodoCardItem.vue";
import storage from '@/functions/LStorage';

export default {
  name: 'TodoList',
  data() {
    return {
      todoItems: []
    }
  },
  components: {
    ElCol,
    ElContainer,
    ElHeader,
    ElMain,
    ElRow,
    TodoForm,
    TodoCardItem
  },
  methods: {
    handleSetTodoItems(data) {
      const savedItem = storage.saveItem(data);
      this.todoItems.push(savedItem);
    },
    handleRemoveTodoItem(itemData, index) {
      storage.removeItem(itemData.id);
      this.todoItems.splice(index, 1);
    },
  },
  created() {
    this.todoItems = storage.getItems();
  }

}
</script>