<template>
    <div v-show="pensamiento" class="
        w-full
        h-[3.5rem]
        bg-primary-green
        flex
        justify-center
        items-center
      ">

        <nuxt-content :document="pensamiento"></nuxt-content>

    </div>
</template>

<script>
export default {
    data() {
        return {
            pensamiento: false
        }
    },

    async fetch() {
        const pensamiento = await this.$content('pensamientos').sortBy('date', 'desc').limit(1).fetch()
        this.pensamiento = pensamiento[0]
    }
}
</script>