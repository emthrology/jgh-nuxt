<template>
  <div class="min-h-screen space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-gray-300 pb-4"
    >
      <!-- 아코디언 헤더 -->
      <button
        @click="toggleAccordion(index)"
        class="flex justify-between items-center w-full text-left text-lg font-semibold "
      >
        <div><span class="text-[#AA1212]">Q </span><span> {{ item.title }}</span></div>
        <span
          :class="{
            'rotate-180': activeIndex === index,
            'rotate-0': activeIndex !== index
          }"
          class="transition-transform duration-300"
        >
          <!-- 플러스/마이너스 아이콘 -->
          <i v-if="activeIndex !== index" class="fas fa-plus"></i>
          <i v-else class="fas fa-minus"></i>
        </span>
      </button>

      <!-- 아코디언 내용 -->
      <div
        v-show="activeIndex === index"
        class="mt-4 py-4 px-8 bg-zinc-200 text-gray-700 transition-all duration-300 ease-in-out flex flex-col items-center"
      >
        <p>{{ item.content }}</p>
        <button
          class="mt-4 inline-flex items-center px-4 py-2 border border-red-600 text-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition duration-300"
        >
          자세히보기
          <i class="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: Array
})

// 활성화된 아코디언 인덱스 관리
const activeIndex = ref(null)

// 아코디언 토글 함수
const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
/* Tailwind CSS로 스타일링 */
</style>
