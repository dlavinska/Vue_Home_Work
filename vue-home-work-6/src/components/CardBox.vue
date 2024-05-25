<template>
<div className="card">
  <div className="card-body">
    <h4 className="card-title" v-if="title">{{title}}</h4>
    <p className="card-text" v-if="text">{{text}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardBox',
  props: {
    title: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    border: 1px solid black;
    margin: 6px;
    background-color: #ffff0066;
  }
</style>
