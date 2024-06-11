<template>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-secondary left" :class="{active: activeClass === 'left'}" @click="setActiveClass('left')">Left</button>
    <button type="button" class="btn btn-secondary right" :class="{active: activeClass === 'right'}" @click="setActiveClass('right')">Right</button>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
  data() {
    return {
      activeClass:'',
    }
  },
  methods: {
    setActiveClass(classBtnName) {
      this.activeClass = classBtnName;
    }

  }
}
</script>