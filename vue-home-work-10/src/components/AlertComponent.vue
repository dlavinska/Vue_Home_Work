<template>
  <div :class="`alert alert-${type}`" role="alert">{{text}}</div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    text: {
      type: String,
      default: 'Some text',
      required: true
    },
    type: {
      type: String,
      default: 'success',
      required: true,
      validator: (value) => {
        return ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
      }
    }
  }
}
</script>