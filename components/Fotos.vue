<template>
    <div>
        <Categoria v-visible="image" link="/archivo/fotos" :catImg="image">Fotos</Categoria>
        <p class="text px-3 pt-1">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: false,
            description: ''
        }
    },

    async fetch() {
        const thumbnail = await this.$content("thumbnails").sortBy('date', 'desc').limit(1).fetch()
        this.image = thumbnail[0].fotos
        this.description = thumbnail[0].description_fotos
    },

    fetchKey: 'categoria-fotos',
}
</script>