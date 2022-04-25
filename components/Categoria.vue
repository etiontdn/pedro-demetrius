<template>
  <div class="cat px-3 w-full">
    <figure class="w-full h-full">
      <img class="w-full h-full" :src="requireImage" alt="" />
    </figure>
    <CatCaption><slot></slot></CatCaption>
  </div>
</template>

<script>
export default {
  props: {
    catImg: String,
  },
  computed: {
    requireImage() {
      return require(`../assets/images/${this.catImg}`)
    },
  },
}
</script>