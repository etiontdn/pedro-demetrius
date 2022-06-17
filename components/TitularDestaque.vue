<template>
  <div v-show="lastPost" class="flex flex-col lg:flex-row lg:gap-4  px-3">
    <figure class="w-full lg:w-1/2 mb-2">
      <img class="w-full" :src="lastPost.thumbnail" alt="Paisagem Bela" />
    </figure>
    <div class="lg:w-1/2">
      <h2 class="subtitle mb-1">{{ lastPost.title }}</h2>
      <p class="text text-justify indent-start mb-2">
        <nuxt-content class="limit-size" :document="lastPost"></nuxt-content>
      </p>
      <NuxtLink class="link flex justify-end bounce-around-hover" :to="'/blog/' + lastPost.slug"><span class="">Veja
          mais</span>
        <Icon class="mt-px h-6 w-6 -translate-x-px" icon="chevron-right"></Icon>
      </NuxtLink>
    </div>

  </div>
</template>
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