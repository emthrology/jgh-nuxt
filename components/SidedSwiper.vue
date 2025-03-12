<template>
  <div>
    <h1 class="p-4 text-2xl font-bold">{{ props.title }}</h1>
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide
          v-for="(slide, idx) in props.list"
          :key="idx"
          @click="slideClick(slide)"
        >
          <img
            v-if="props.showThumbnail"
            class="rounded-xl"
            :class="[props.slideHeight]"
            :src="slide.img"
            alt="slide"
          />
          <slot :slide="slide" :index="idx"></slot>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps({
  slideHeight: {
    type: String,
    default: 'h-[100px]',
  },
  showThumbnail: {
    type: Boolean,
    default: true,
  },
  slidesPerView: Number,
  title: String,
  list: Array,
});

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  slidesPerView: props.slidesPerView,
  spaceBetween: 10,
  slidesOffsetBefore: 12,
  slidesOffsetAfter: 16,

  loop: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true
  // }
  // breakpoints: {
  //   400: {
  //     slidesPerView: 1.5,
  //     spaceBetween: 10
  //   },
  //   450: {
  //     slidesPerView: 1.8,
  //     spaceBetween:10
  //   },
  //   500: {
  //     slidesPerView: 2.1,
  //     spaceBetween: 10
  //   }
  // }
});

const emit = defineEmits(['slideClick']);
const slideClick = (slide) => {
  emit('slideClick', slide);
};

onMounted(() => {
  console.log(swiper.instance);
  // swiper.value.on('slideChange', () => {
  //   console.log('slide changed')
  // })
});
</script>

<style lang="scss" scoped></style>
