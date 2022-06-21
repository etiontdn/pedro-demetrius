<template>
    <div class="flex flex-col gap-4 px-3">
        <div class="relative pb-2 after:contents after:border-b-4 after:border-primary-green/90 after:absolute after:left-0 after:bottom-0
        after:h-px after:w-2/3 lg:after:w-1/4">
            <div class="nav-head flex items-center">
                <NuxtLink to="/" class="go-back animate-clicked-on -translate-y-1">
                    <Icon icon="chevron-right" class="h-[2.25rem] w-[2.25rem] scale-[-1]"></Icon>
                </NuxtLink>
                <h1 class="title">Archivo</h1>
            </div>
            <p class="text px-px text-justify max-w-1/2">
                {{ description }}
            </p>
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
    async asyncData({ params, $content }) {
        const posts = await $content("blog").where({ 'category': params.categoria }).sortBy('date', 'desc').fetch();
        let description = await $content("thumbnails").fetch();
        description = description[0]['description_' + params.categoria];
        return { posts, description }
    },

    head() {
        return { title: `Pedro Demetrius - Archivo` }
    }
}
</script>
