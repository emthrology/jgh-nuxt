<template>
  <div class=" w-full min-h-[400px] flex flex-col items-center">
    <h1 class="mt-8 mb-4 text-2xl font-bold">{{ contentData.title }}</h1>
    <div v-html="contentData.content" class="p-4"></div>
  </div>
</template>

<script setup>
  import dayjs from 'dayjs'
  
  const props = defineProps({
    id:String,
  })
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiBase;
  const {data,error} = await useFetch(`${apiUrl}/galleries/${props.id}`, {
    params: {
      board:'gallery',
      category:'33',
    }
  })
  const contentData = data.value.data;
</script>

<style lang="scss" scoped>

</style>