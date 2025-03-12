<template>
  <div>
    <h1 class="p-4 text-2xl font-bold">{{ props.title }}</h1>
    <div class="flex flex-col justify-around items-center">
      <div class="px-4 flex flex-col items-start">
        <p class="text-red-700 text-4xl font-semibold">목사가 왜 정치하나?</p>
        <p class="py-4 text-lg text-zinc-500 font-semibold">대한민국 국민이라면 누구든 정치를 할 수 있지만, 저는 정치인으로 출마하지 않습니다.
          다만, 애국운동을 할 뿐입니다.</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
  })
</script>

<style lang="scss" scoped>

</style>