<template>
  <div class="w-full">
    <h1 class="p-4 text-2xl font-bold">{{ props.title }}</h1>
    <div class="flex flex-col justify-center items-center">
      <ul class="w-full">
        <li v-for="(item,index) in list" :key="index">
          <slot name="item" :item="item" :index="index"></slot>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    list: Array
  })
</script>

<style lang="scss" scoped>

</style>