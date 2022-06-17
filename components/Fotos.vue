<template>
    <div>
        <Categoria v-visible="image" link="/archivo/fotos" :catImg="image">Fotos</Categoria>
        <p class="text px-3 pt-1"></p>
    </div>
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
    },

    fetchKey: 'categoria-fotos',
}
</script>