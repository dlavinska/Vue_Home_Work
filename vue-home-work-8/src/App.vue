<template>
  <DefinitionsList :data="definitions"/>
</template>

<script>
import DefinitionsList from './components/Definitions'

export default {
  name: 'App',
  components: {
    DefinitionsList
  },
  data() {
    return {
      definitions: [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
      ],
    }
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
