<template>
  <div>
    <p>
      <a class="btn btn-primary"
        data-bs-toggle="collapse"
        href="#"
        role="button"
        aria-expanded="false"
        @click.prevent="toggleContent"
      >
        Link with href
      </a>
    </p>
    <div class="collapse" :class="{show: isCollapsing}">
      <div class="card card-body">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseComponent',
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    opened: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      isCollapsing: this.opened,
    }
  },
  methods: {
    toggleContent() {
      this.isCollapsing = !this.isCollapsing;
    }
  }
}
</script>