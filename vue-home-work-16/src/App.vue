<template>
  <div>
    <h1>Приклад компонента Collapse</h1>
    <CollapseComponent text="Це прихований текст" :opened="true"/>
  </div>
</template>

<script>
import CollapseComponent from './components/CollapseComponent'

export default {
  name: 'App',
  components: {
    CollapseComponent
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
  margin-top: 60px;
}
</style>
