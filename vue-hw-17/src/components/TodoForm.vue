<template>
  <el-form :model="form">
    <h2 class="text-large font-600 mr-3"> Create Todo Item </h2>
    <el-form-item>
      <el-input v-model="form.title" placeholder="Title" size="large" @blur="validateField('title')"/>
      <el-alert type="info" show-icon :closable="false" v-if="errors.title">
        <p>{{ errors.title }}</p>
      </el-alert>
      
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.description" placeholder="Description" size="large" @blur="validateField('description')"/>
      <el-alert type="info" show-icon :closable="false" v-if="errors.description">
        <p>{{ errors.title }}</p>
      </el-alert>
    </el-form-item>
    <el-form-item>
      <el-select v-model="form.status" placeholder="Select" size="large" @blur="validateField('status')">
        <el-alert type="info" show-icon :closable="false" v-if="errors.status">
          <p>{{ errors.status }}</p>
        </el-alert>
        <el-option v-for="item in todoStatuses" :key="item.id" :label="item.title" :value="item.value"/>
      </el-select>
    </el-form-item>
    <el-button @click.stop="handleSubmit" type="primary">Save</el-button>    
  </el-form>

</template>

<script>
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElAlert } from "element-plus";
import { todoStatuses } from "../common/options.js";
import { reactive, ref } from 'vue';
import { validationSchema } from "@/schemas/validationSchema.js";

export default {
  name: 'TodoForm',
  data() {
    return {
      form: reactive({
        title: '',
        description: '',
        status: 'not-comleted'
      }),
      errors: ref({}),
    }
  },
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElButton,
    ElAlert
  },
  computed: {
    todoStatuses() {
      return todoStatuses;
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.validate();
      if (isValid) {
        this.$emit('setTodoItems', this.form);
        this.clearForm();
      }
    },
    async validateField(field) {
      try {
        await validationSchema.validateAt(field, this.form);
        this.errors[field] = null;
      } catch(err) {
        this.errors[field] = err.message;
      }
    },
    async validate() {
      try {
        await validationSchema.validate(this.form, { abortEarly: false });
        this.errors = {};
        return true;
      } catch (err) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        this.errors = validationErrors;
        return false;
      }
    },
    clearForm() {
      this.form.title = '';
      this.form.description = '';
      this.form.status = 'Not Completed',
      this.errors = {}
    }
  }
}
</script>