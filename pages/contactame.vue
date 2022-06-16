<template>
  <div class="flex flex-col gap-4 px-3">
    <div class="nav-head flex items-center">
      <NuxtLink to="/" class="go-back -translate-y-1">
        <Icon icon="chevron-right" class="h-[2.25rem] w-[2.25rem] scale-[-1]"></Icon>
      </NuxtLink>
      <h1 class="title">Quien soy</h1>
    </div>
    <div class="center-photo flex justify-center">
      <Photo class="w-[10rem] h-[10rem]"></Photo>
    </div>
    <nuxt-content :document="datos" class="text">

    </nuxt-content>
    <h2 class="subtitle">
      Contáctame
    </h2>
    <p><a :href="'mailto:' + datos.email">{{ datos.email }}</a> <span class="text-primary-orange">|</span> {{
        datos.phone
    }}
    </p>
  </div>
</template>

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
}
</script>
