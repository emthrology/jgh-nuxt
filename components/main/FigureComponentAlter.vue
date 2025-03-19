<template>
  <div class>
    <div class="z-1 relative flex flex-col items-center min-h-[50vh]">
      <img
        class="z-10 w-full object-contain"
        src="/images/figure_02.png"
        alt="Logo"
      />
      <div
        class="absolute z-10 bottom-0 pb-4 flex flex-col items-center justify-end w-full min-h-[200px] bg-gradient-to-t from-black to-transparent"
      >
        <div class="flex flex-col">
          <span
            class="text-[36px] font-bold font text-center text-white font-BookkMyungjo"
            >{{ t('main_title_01') }}</span
          >
          <div
            class="border-l border-red-500 pl-2 text-md font-normal text-white"
          >
            {{ t('sub_title_01') }}
          </div>
        </div>
      </div>
    </div>
    <!-- <div>{{ t('jgh') }}</div> -->
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
</script>

<style lang="scss" scoped></style>
