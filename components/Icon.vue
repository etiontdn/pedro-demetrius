<template>
    <img :src="requireIcon">
</template>
<script>
export default {
  props: {
    icon: String,
  },
  computed: {
    requireIcon() {
      return require(`../assets/icons/${this.icon}.svg`)
    }
  }
}
</script>