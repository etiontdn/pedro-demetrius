<template>
    <img :src="'/icons/' + icon + '.svg'">
</template>
<script>
export default {
  props: {
    icon: String,
  },
}
</script>