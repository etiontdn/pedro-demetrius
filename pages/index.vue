<template>
  <div class="flex flex-col gap-4">
    <TitularDestaque></TitularDestaque>
    <Categorias></Categorias>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Inicial',

  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return { posts }
  },

  mounted() {


    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }
}
</script>
