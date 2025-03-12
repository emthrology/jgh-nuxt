<template>
  <div class="mt-[85px] mb-[120px] flex flex-col items-center">
    <NavComponent current-menu="카드뉴스" />
    <!-- <GalleryContentDetail :id="id" /> -->
    <CardnewsCompnent :id="id[0]" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

// console.log(id); // 배열 형태로 출력됩니다.
</script>

<style lang="scss" scoped></style>
