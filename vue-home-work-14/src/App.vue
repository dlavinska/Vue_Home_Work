<template>
  <CarouselComponent :images="images"/>
</template>

<script>
import CarouselComponent from './components/CarouselComponent'

export default {
  name: 'App',
  components: {
    CarouselComponent
  },
  data() {
    return {
      images: [{title: 'sunflowers', src: './images/first.jpg'}, {title:'cat', src: './images/second.jpg'}, {title: 'butterfly', src: './images/third.jpg'}]
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
