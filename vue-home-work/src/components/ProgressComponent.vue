<template>
  <div class="progress">
    <div class="progress-bar" 
      role="progressbar" 
      :aria-valuenow="percentage" 
      aria-valuemin="0" 
      aria-valuemax="100" 
      aria-label="progressbar" 
      :style="{ width: percentage + '%' }"
    >
      {{percentage + `%`}}
    </div>
  

  </div>
</template>

<script>
export default {
  name: 'ProgressComponent',
  props: {
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (value) => {
        return value >=0 && value <=100;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
