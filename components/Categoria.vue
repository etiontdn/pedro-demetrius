<template>
  <div class="cat relative px-3 lg:px-2 w-full">
    <figure class="w-full h-full">
      <img class="w-full h-full" :src="catImg" alt="" />
    </figure>
    <NuxtLink :to="link">
      <CatCaption class="absolute left-0 bottom-2">
        <span>
          <slot></slot>
        </span>
        <Icon class="h-[1.875rem] w-[1.875rem]" icon="chevron-right"></Icon>
      </CatCaption>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    catImg: [String, Boolean],
    link: String
  },
}
</script>