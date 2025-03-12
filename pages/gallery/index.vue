<template>
  <div class="mt-[60px] mb-[120px] flex flex-col items-center">
    <NavComponent current-menu="최근 활동 사진" />
    <h1 class="mt-8 mb-4 text-2xl font-bold">최근 활동 사진</h1>
    <GalleryComponent 
      v-for="(item, index) in currentList" :key="index" :galleryItem="item"
      @click="handleGalleryClick(item)"
    />
    <Button class="w-[90%]" label="더보기" variant="primary" @onclick="handleClick"/>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiBase;
  const page = ref(1);
  const currentList = ref([]);
  const {data, refresh, error} = await useFetch(`${apiUrl}/galleries`, {
    key: `data-${page.value}`,
    params: {
      board:'gallery',
      category:'33',
      page: page
    }
  })
  const responseData = data.value;
  currentList.value = [
    ...currentList.value,
    ...responseData.data
  ]
  const {links, meta} = responseData;

  const handleClick = () => {
    console.log('더보기 클릭')
    if(meta.current_page < meta.last_page) {
      page.value++;
      refresh();
    }else {
      alert('마지막 페이지입니다.')
    }
  }

  const router = useRouter();
  const handleGalleryClick = (gallery) => {
    router.push(`/gallery/${gallery.id}`)
  }
</script>

<style lang="scss" scoped>

</style>