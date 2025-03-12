<template>
  <div class="w-full flex flex-col justify-between items-center">
    <div class="w-[90%] aspect-video overflow-hidden">
      <img class="w-full object-cover" :src="props.galleryItem.gallery_photo" alt="">
    </div>
    <div class="my-4 w-[90%]">
      <p class="">{{ props.galleryItem.title }}</p>
      <p class=" text-sm text-zinc-400">{{ dayjs(props.galleryItem.created_at).format('YYYY-MM-DD') }}</p>
    </div>

  </div>
</template>

<script setup>
  import dayjs from 'dayjs'
  const props = defineProps({
    galleryItem:Object
  })


</script>

<style lang="scss" scoped>

</style>