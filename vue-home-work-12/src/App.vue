<template>
  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
</template>

<script>
import ListGroup from './components/ListGroup'

export default {
  name: 'App',
  components: {
    ListGroup
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
