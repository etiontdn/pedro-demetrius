<template>
    <div class="flex flex-col gap-4 px-3">
        <div class="nav-head flex items-center">
            <NuxtLink to="/" class="go-back -translate-y-1">
                <Icon icon="chevron-right" class="h-[2.25rem] w-[2.25rem] scale-[-1]"></Icon>
            </NuxtLink>
            <h1 class="title">{{ post.title }}</h1>

        </div>
        <figure class="w-full mb-2">
            <img class="w-full" :src="post.thumbnail" alt="Paisagem Bela" />
        </figure>
        <p class="text italic !text-gray-500">
            Fecha de publicación: {{ post.date.slice(0, 10) }}
        </p>
        <nuxt-content class="w-full text text-justify" :document="post"></nuxt-content>
    </div>
</template>

<script>
export default {
    async asyncData({ params, $content }) {
        const postSlug = params.post
        const post = await $content("blog").where({ "slug": postSlug }).limit(1).fetch();

        return { post: post[0] }
    }
}
</script>
