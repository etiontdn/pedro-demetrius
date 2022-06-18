<template>
    <div class="post flex flex-col gap-4 px-3">
        <div class="nav-head flex items-center">
            <NuxtLink to="/" class="go-back animate-clicked-on  -translate-y-1">
                <Icon icon="chevron-right" class="h-[2.25rem] w-[2.25rem] scale-[-1]"></Icon>
            </NuxtLink>
            <h1 class="title">{{ post.title }}</h1>

        </div>
        <figure class="w-full mb-2 max-w-3xl m-auto">
            <img class="w-full" :src="post.thumbnail" />
        </figure>
        <div class="flex flex-col gap-4 max-w-2xl m-auto">
            <p class="text italic !text-gray-500">
                Fecha de publicación: {{ $convertDate(this.post.date.slice(0, 10)) }}
            </p>
            <nuxt-content class="w-full text text-justify" :document="post"></nuxt-content>
        </div>
    </div>
</template>

<style>
.post .nuxt-content p {
    margin-bottom: 0.75rem;
    text-indent: 1rem;
}

.post .nuxt-content h1,
.post .nuxt-content h2 {
    margin-bottom: 1rem;
}

.post .nuxt-content h2 {
    margin-left: 1rem;
}
</style>


<script>
export default {
    async asyncData({ params, $content }) {
        const postSlug = params.post
        const post = await $content("blog").where({ "slug": postSlug }).limit(1).fetch();

        return { post: post[0] }
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
        return { title: `Pedro Demetrio - ${this.post.title}` }
    }
}
</script>
