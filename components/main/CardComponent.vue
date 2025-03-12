<template>
  <nuxt-link :to="props.link" class="flex flex-col justify-center items-center rounded-2xl shadow-lg border border-gray-100 w-[100px] min-h-[100px] bg-white">
    <img :src="img" alt="card" class="w-[50px] h-[50px] mt-1">
    <p>{{ title }}</p>
  </nuxt-link>
</template>

<script setup>
  const props = defineProps({
    link: String,
    img: String,
    title: String
  })
</script>

<style lang="scss" scoped>

</style>