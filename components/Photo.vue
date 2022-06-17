<template>
    <figure v-visible="photo" class="h-full">
        <img class="h-full" :src="photo" alt="Foto Pedro Demetrius">
    </figure>
</template>
<script>
export default {
    data() {
        return {
            photo: false
        }
    },

    async fetch() {
        const datos = await this.$content("dados").limit(1).fetch()
        this.photo = datos[0].photo
    }
}
</script>