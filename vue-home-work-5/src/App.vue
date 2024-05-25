<template>
  <CardBox/>
</template>

<script>
import CardBox from './components/CardBox.vue'

export default {
  name: 'App',
  components: {
    CardBox,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 120px;
}
</style>
