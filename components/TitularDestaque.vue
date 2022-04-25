<template>
  <div class="flex flex-col lg:flex-row lg:gap-4  px-3">
    <figure class="w-full lg:w-1/2 mb-2">
      <img
        class="w-full"
        src="@/assets/images/TitularDestaque.jpg"
        alt="Paisagem Bela"
      />
    </figure>
    <div class="lg:w-1/2"><h2 class="subtitle mb-1">Título do Destaque</h2>
    <p class="text text-justify indent-start mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      lacinia dolor. Phasellus imperdiet dictum est id tempor. Nunc congue
      sapien a orci placerat ultrices. Phasellus eu enim a nunc scelerisque
      tempus. Nullam hendrerit, diam vel laoreet aliquet, lacus nisi porta
      velit, in porttitor massa orci quis risus. Nunc fringilla, velit eu
      maximus aliquet, turpis turpis scelerisque nisl, vel elementum leo metus
      sit amet eros. In ut arcu in diam blandit fringilla. Phasellus ac nibh id
      mi tincidunt commodo.
    </p><NuxtLink class="link flex justify-end bounce-around-hover" :to="'#'"><span class="">Veja mais</span> <Icon class="mt-px h-6 w-6 -translate-x-px" icon="chevron-right"></Icon></NuxtLink></div>
    
  </div>
</template>
<script>
export default {}
</script>