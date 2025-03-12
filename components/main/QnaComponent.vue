<template>
  <div>
    <SidedSwiper
      @slideClick=""
      :title="props.title"
      :list="props.list"
      :showThumbnail="false"
      :slides-per-view="1.1"
    >
      <template #default="{ slide, index }">
        <div
          class="border border-solid rounded-2xl shadow-md h-[160px] flex flex-col justify-center items-start my-4 p-5"
        >
          <div class="flex flex-col items-start">
            <p class="text-red-700 text-[22px] font-BookkMuyngjo">
              {{ slide.title }}
            </p>
            <p
              v-html="slide.answer"
              class="pt-4 text-[16px] text-zinc-500 font-BookkMuyngjo"
            ></p>
          </div>
        </div>
      </template>
    </SidedSwiper>
    <div class="flex flex-row justify-center mt-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
const translate = (target) => t(target);
const props = defineProps({
  title: String,
  list: {
    type: Array,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped></style>
