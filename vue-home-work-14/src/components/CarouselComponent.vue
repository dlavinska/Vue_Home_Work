<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(elem, index) in images" :key="index" class="carousel-item" :class="{active: index === activeIndex}">
        <img :alt="elem.title" class="d-block w-100" :src="elem.src">
      </div>
    </div>
    <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" @click="prevPicture">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" @click="nextPicture">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    }
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    prevPicture() {
      this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length
    },
    nextPicture() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length
    }
  }
}
</script>