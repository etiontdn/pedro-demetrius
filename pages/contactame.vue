<template>
  <div class="flex flex-col gap-4  px-3">
    <div class="nav-head flex items-center">
      <NuxtLink to="/" class="go-back animate-clicked-on  -translate-y-1">
        <Icon icon="chevron-right" class="h-[2.25rem] w-[2.25rem] scale-[-1]"></Icon>
      </NuxtLink>
      <h1 class="title">Quien soy</h1>
    </div>
    <div class="about-container flex flex-col gap-4 md:max-w-lg md:m-auto border-primary-green md:border-4 md:p-6">
      <div class="center-photo flex justify-center">
        <Photo class="w-[10rem] h-[10rem]"></Photo>
      </div>
      <nuxt-content :document="datos" class="text text-justify">
      </nuxt-content>
      <h2 class="subtitle">
        Contáctame
      </h2>
      <p><a :href="'mailto:' + datos.email">{{ datos.email }}</a> <span class="text-primary-orange">|</span> {{
          datos.phone
      }}
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@media screen and (min-width: 768px) {
  .about-container {
    box-shadow: 12px 12px 0 0 var(--green);
  }
}
</style>



<script>
export default {
  name: 'Contáctame',

  async asyncData({ $content }) {
    const datos = await $content("dados").limit(1).fetch()

    return {
      datos: datos[0]
    }
  },

  methods: {
    goToPrev() {
      this.$router.go('/')
    },
  },

  head() {
    return { title: `Pedro Demetrio - Quien soy` }
  }
}
</script>
