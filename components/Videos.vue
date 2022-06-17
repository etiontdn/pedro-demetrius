<template>
    <Categoria v-show="image" link="/archivo/videos" :catImg="image">Videos</Categoria>
</template>

<script>
export default {
    data() {
        return {
            image: false
        }
    },

    async fetch() {
        const thumbnail = await this.$content("thumbnails").sortBy('date', 'desc').limit(1).fetch()
        this.image = thumbnail[0].videos
    }
}
</script>