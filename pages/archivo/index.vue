<template>
    <div class="flex flex-col gap-4 px-3">
        <div class="nav-head flex items-center">
            <NuxtLink to="/" class="go-back animate-clicked-on -translate-y-1">
                <Icon icon="chevron-right" class="h-[2.25rem] w-[2.25rem] scale-[-1]"></Icon>
            </NuxtLink>
            <h1 class="title">Archivo</h1>
        </div>
        <div class="flex flex-row gap-6 flex-wrap">
            <div class="mb-2 md:w-[calc(50%-0.75rem)]" v-for="post of posts" :key="post.slug">
                <figure class="w-full mb-2">
                    <img class="w-full" :src="post.thumbnail" />
                </figure>
                <h2 class="subtitle">
                    {{ post.title }}
                </h2>
                <p class="text italic !text-gray-500">
                    {{ $convertDate(post.date.slice(0, 10)) }}
                </p>
                <nuxt-content class="w-full limit-size text text-justify" :document="post"></nuxt-content>
                <NuxtLink class="mt-2 link flex justify-end animate-clicked-on bounce-around-hover"
                    :to="'/blog/' + post.slug"><span class="">Vea mas</span>
                    <Icon class="mt-px h-6 w-6 -translate-x-px" icon="chevron-right"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const posts = await $content("blog").sortBy('date', 'desc').fetch();

        return { posts }
    },

    computed: {
        fechaPublicacion() {
            const fecha = this.post.date.slice(0, 10).split("-")
            const anos = fecha[0]
            const meses = fecha[1]
            const dias = fecha[2]

            return `${dias}/${meses}/${anos}`
        }
    },

    head() {
        return { title: `Pedro Demetrius - Archivo` }
    }
}
</script>
