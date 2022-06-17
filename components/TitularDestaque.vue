<template>
  <div v-visible="lastPost" class="flex flex-col lg:flex-row lg:gap-4  px-3 relative pb-6 lg:pb-12 after:contents after:border-b-4 after:border-primary-green/90 after:absolute after:left-1/4 after:bottom-0
        after:h-px after:w-1/2">
    <figure class="w-full lg:w-1/2 mb-3">
      <img class="w-full" :src="lastPost.thumbnail" alt="Paisagem Bela" />
    </figure>
    <div class="lg:w-1/2">
      <h2 class="subtitle mb-1">{{ lastPost.title }}</h2>
      <div class="text text-justify indent-start mb-2">
        <nuxt-content class="limit-size" :document="lastPost"></nuxt-content>
      </div>
      <NuxtLink class="link flex justify-end bounce-around-hover" :to="'/blog/' + lastPost.slug"><span class="">Veja
          mais</span>
        <Icon class="mt-px h-6 w-6 -translate-x-px" icon="chevron-right"></Icon>
      </NuxtLink>
    </div>

  </div>
</template>

<style lang="postcss" scoped>
figure {
  margin-right: 12px;

  box-shadow: 12px 12px 0 0 var(--green);
}
</style>

<script>
export default {
  data() {
    return { lastPost: false }
  },

  async fetch() {
    const posts = await this.$content('blog').sortBy('date', 'desc').limit(1).fetch()
    this.lastPost = posts[0]
    return { posts }
  },

  fetchOnServer: false,

}
</script>