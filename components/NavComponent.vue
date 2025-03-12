<template>
  <div class="w-full bg-gray-200 h-[40px] flex flex-row justify-start items-center px-4 py-3 gap-3">
    <img class="pb-[1px]" src="/images/nav/nav_home.png" alt="home_icon">
    <span class="text-zinc-500">홈</span>
    <img class="pb-[1px]" src="/images/nav/nav_chavron_right.png" alt="right">
    <span class="text-zinc-500 font-bold">{{ props.currentMenu }}</span>
  </div>
</template>

<script setup>
  const props = defineProps({
    currentMenu: String
  })
</script>

<style lang="scss" scoped>

</style>