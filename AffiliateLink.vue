<template>
  <a :href="decoratedUrl">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    baseUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    decoratedUrl() {
      return baseUrl
    }
  }
}
</script>
