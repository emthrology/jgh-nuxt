<template>
  <div class>
    <div class="z-1 relative flex flex-col items-center min-h-[50vh]">
      <img class="z-10" src="/images/figure_01.png" alt="Logo" />
      <div
        class="z-0 absolute top-[18px] md:top-[20px] transform translate-x-[-0%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="400"
          viewBox="0 0 375 400"
          fill="none"
        >
          <path
            d="M475.39 38.5064C213.381 164.653 -91.2679 65.4167 -210.841 0.0298663C-419.526 171.765 -708.802 480.318 -196.43 340.643C315.941 200.967 562.311 321.994 621.45 399.966C681.933 226.918 737.398 -87.6408 475.39 38.5064Z"
            fill="#9C0B0E"
          />
        </svg>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div
          class="text-[36px] font-bold font text-center text-[#AA1212] font-BookkMuyngjo"
        >
          {{ t('main_title_01') }}
        </div>
        <div
          class="text-[28px] font-bold text-center text-black font-BookkMuyngjo"
        >
          {{ t('main_title_02') }}
        </div>
        <div class="text-lg font-thin mt-4 text-zinc-500 text-center">
          {{ t('sub_title_01') }}
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
