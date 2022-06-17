<template>
    <Categoria v-visible="image" link="/archivo/fotos" :catImg="image">Fotos</Categoria>
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
        this.image = thumbnail[0].fotos
    }
}
</script>