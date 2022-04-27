<template>
  <div class="flex flex-col gap-4 px-3">
    <div class="nav-head flex items-center">
      <a class="go-back -translate-y-1" href="#" @click="goToPrev">
        <Icon
          icon="chevron-right"
          class="h-[2.25rem] w-[2.25rem] scale-[-1]"
        ></Icon>
      </a>
      <h1 class="title">Quien soy</h1>
    </div>
    <div class="center-photo flex justify-center">
      <Photo class="w-[10rem] h-[10rem]"></Photo>
    </div>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      lacinia dolor. Phasellus imperdiet dictum est id tempor. Nunc congue
      sapien a orci placerat ultrices. Phasellus eu enim a nunc scelerisque
      tempus. Nullam hendrerit, diam vel laoreet aliquet, lacus nisi porta
      velit, in porttitor massa orci quis risus. Nunc fringilla, velit eu
      maximus aliquet, turpis turpis scelerisque nisl, vel elementum leo metus
      sit amet eros. In ut arcu in diam blandit fringilla. Phasellus ac nibh id
      mi tincidunt commodo.
    </p>
    <h2 class="subtitle">
      Contáctame
    </h2>
    <p><a href="mailto:email@mail.com">email@mail.com</a> <span class="text-primary-orange">|</span> +99 (99) 99999-9999</p>
  </div>
</template>

<script>
export default {
  name: 'Contáctame',
  methods: {
    goToPrev() {
      this.$router.go('/')
    },
  },
}
</script>
