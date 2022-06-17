<template>
  <div class="flex flex-col gap-4 lg:gap-8 pb-4 animate-in">
    <TitularDestaque></TitularDestaque>
    <Categorias></Categorias>
  </div>
</template>

<script>
export default {
  name: 'Inicial',
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
