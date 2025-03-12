<template>
  <h1 class="p-4 text-2xl font-bold">{{ props.title }}</h1>
  <div class="flex flex-col justify-around items-center">
    <div class="flex flex-wrap p-4">
      <div v-for="(group, groupIndex) in groupedImages" :key="groupIndex" class="w-full flex">
        <div v-for="(image, itemIndex) in group" :key="image.id" :class="getImageWidth(itemIndex + groupIndex)">
          <img
            :key="index"
            :src="image.img"
            :alt="image.alt"
            class="gallery-image"
            @click="imgClick(image)"
          />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>s

<script setup>
  const props = defineProps({
    title: String,
    images: {
      type: Array,
      required: true,
    },
  });
  const groupedImages = computed(() => {
    return props.images.reduce((result, item, index) => {
      const groupIndex = Math.floor(index / 2)
      if (!result[groupIndex]) {
        result[groupIndex] = []
      }
      result[groupIndex].push(item)
      return result
    }, [])
  })
  const getImageWidth = (index) => {
    return index % 2 === 0 ? 'w-[33.3% - 1px] ' : 'w-[66.6% - 1px] flex-1';
  };

  const emit = defineEmits(['imgClick'])
  // 날짜 클릭 이벤트 처리
  const imgClick = (image) => {
    emit('imgClick', image.id);
  }
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap; /* 아이템이 한 줄에 다 들어가지 않으면 다음 줄로 이동 */
  padding: 5px; /* 갤러리 외부 여백 */
}

.gallery-image {
  padding: 0 4px;
  width: 100%;
  height: 100px; /* 비율 유지 */
  margin: 3px; 
  border-radius: 8px; /* 둥근 모서리 */
  object-fit: cover; /* 이미지 크기 조정 */
}
</style>
