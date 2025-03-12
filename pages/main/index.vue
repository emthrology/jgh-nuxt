<template>
  <div class="mt-[60px] mb-[120px]">
    <MainFigureComponent @click="handleFigureClick"/>
    <div class="flex flex-row flex-wrap justify-center gap-4 mt-4">
      <div v-for="item in items" class="">
        <MainCardComponent :img="item.img" :title="`${translate(item.title)}`" :link="item.link" />
      </div>
    </div>
    <div class="border border-b-0 border-x-0 mt-8">
      <SidedSwiper @slideClick="handleNewsClick" :title="`${t('menutitle_01')}`" :list="card" :slides-per-view="1.4" :slideHeight="'h-[300px]'" />
    </div>
    <!-- <div class="border border-b-0 border-x-0 mt-8">
      <MainQnaComponent :title="`${t('menutitle_01')} Q&A`">
        <Button class="w-[90%]" :label="t('see_more')" variant="primary" @onclick="handleQnaClick"/> 
      </MainQnaComponent>
    </div> -->
    <div class="border border-b-0 border-x-0 mt-8">
      <ImgGallery :title="t('menutitle_02')" :images="gallery" @imgClick="handleImgClick"> 
        <Button class="w-[90%]" :label="t('see_more')" variant="primary" @onclick="handleGalleryClick"/>
      </ImgGallery>
    </div>
    <div class="border border-b-0 border-x-0 mt-8">
      <SidedSwiper @slideClick="handleBookClick" :title="`${t('menutitle_03')}`" :list="book" :slides-per-view="2.2" :slideHeight="'h-[250px]'">
        <template #default="{ slide, index }">
          <p>{{ slide.title }}</p>
          <nuxt-link :to="slide.urls" target="_blank" rel="noopener noreferrer" class="text-blue-500 text-sm">자세히보기 +</nuxt-link>
        </template>
      </SidedSwiper>
    </div>
    <div class="border border-b-0 border-x-0 mt-8 ">
      <ContentsList
        :title="t('menutitle_04')"
        :list="news"
      >
        <template #item="{ item, index }">
          <NewsContent :content="item" />
        </template>
        <Button class="w-[90%]" :label="t('see_more')" variant="primary" @onclick="handlePressClick"/>
      </ContentsList>
    </div>
  </div>
  <slot/>
</template>
<script setup>
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiBase;
  const {data} = await useFetch(`${apiUrl}/intros`)
  const{ book, gallery, news, qna, card } = data.value;

  import { useRouter } from "vue-router";
  const { t,locale } = useI18n()
  const translate = (target) => t(target);
  const items = [
    {title: 'introduction', img: '/images/icon_intro.png', link: '/introduction'},
    {title: 'photo', img: '/images/calendar.png', link:'/gallery'},
    {title: 'qna', img: '/images/qna.png', link:'/qnas'},
  ]
  const cardnewsList = ref([
    {img: '/images/cardnews_01.png'},
    {img: '/images/cardnews_02.png'},
    {img: '/images/cardnews_03.png'},
  ])

  const router = useRouter();
  const handleFigureClick = () => {
    router.push('/introduction')
  }
  const handleQnaClick = () => {
    router.push('/qnas')
  }
  const handleNewsClick = (news) => {
    router.push(`/cardnews/${news.id}`)
  }
  const handleImgClick = (id) => {
    router.push(`/gallery/${id}`)
  }
  const handleGalleryClick = () => {
    router.push('/gallery')
  }
  const handleBookClick = (book) => {
    window.open(book.urls, '_blank', 'noopener,noreferrer');
  }
  const handlePressClick = () => {
    router.push('/press')
  }
</script>

<style lang="scss" scoped>

</style>