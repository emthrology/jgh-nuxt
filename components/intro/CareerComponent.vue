<template>
  <div class="p-2 flex flex-col items-start">
    <p class="before:content-['•'] before:text-[#AA1212] before:mr-2 text-xl font-BookkMuyngjo">
      {{ props.date}}
    </p>
    <p class="text-md text-zinc-500 pl-4">{{ props.event }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    date: String,
    event: String
  })
</script>

<style lang="scss" scoped>

</style>