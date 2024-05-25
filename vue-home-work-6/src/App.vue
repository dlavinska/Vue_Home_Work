<template>
  <CardBox title="hi"/>
  <CardBox text="how are you?"/>
  <CardBox title="I'm fine" text="And you?"/>
</template>

<script>
import CardBox from './components/CardBox'

export default {
  name: 'App',
  components: {
    CardBox
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
  margin: 60px;
}
</style>
