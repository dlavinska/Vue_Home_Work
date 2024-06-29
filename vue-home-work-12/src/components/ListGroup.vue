<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(children, index) in $slots.default()" :key="index">
      <component :is="children"/>
    </li>

  </ul>
</template>

<script>
export default {
  name: 'ListGroup',
}
</script>