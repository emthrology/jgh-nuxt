<template>
  <div class="mt-[80px] mb-[120px]">
    <MainFigureComponentAlter @click="handleFigureClick" />
    <!-- <div class="flex flex-row flex-wrap justify-center gap-4 mt-4">
      <div v-for="item in items" class="">
        <MainCardComponent
          :img="item.img"
          :title="`${translate(item.title)}`"
          :link="item.link"
        />
      </div>
    </div> -->
    <MainQnaComponent :title="`${t('menutitle_00')}`" :list="qnaList">
      <Button
        class="w-[50%]"
        round="3xl"
        label="자세히보기"
        variant="primary"
        @onclick="handleQnaClick"
      />
    </MainQnaComponent>

    <!-- <div class="border border-b-0 border-x-0 mt-8">

    </div> -->
    <div class="border border-b-0 border-x-0 mt-8">
      <SidedSwiper
        @slideClick="handleNewsClick"
        :title="`${t('menutitle_01')}`"
        :list="card"
        :slides-per-view="1.4"
        :slideHeight="'h-[300px]'"
      />
    </div>
    <div class="border border-b-0 border-x-0 mt-8">
      <ImgGallery
        :title="t('menutitle_02')"
        :images="gallery"
        @imgClick="handleImgClick"
      >
        <Button
          class="w-[90%]"
          :label="t('see_more')"
          variant="primary"
          @onclick="handleGalleryClick"
        />
      </ImgGallery>
    </div>
    <div class="border border-b-0 border-x-0 mt-8 bg-zinc-100">
      <SidedSwiper
        @slideClick="handleBookClick"
        :title="`${t('menutitle_03')}`"
        :list="book"
        :slides-per-view="2.2"
        :slideHeight="'h-[250px]'"
      >
        <template #default="{ slide, index }">
          <div class="flex flex-row justify-between mt-2 mr-[0.5rem] md:mr-12">
            <div class="w-32 overflow-hidden text-ellipsis">
              {{ slide.title }}
            </div>
            <div class="mt-1">
              <img src="/public/images/nav/right.png" alt="" />
            </div>
          </div>

          <!-- <nuxt-link
            :to="slide.urls"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 text-sm"
            >자세히보기 +</nuxt-link
          > -->
        </template>
      </SidedSwiper>
    </div>
    <div class="border border-b-0 border-x-0">
      <ContentsList :title="t('menutitle_04')" :list="news">
        <template #item="{ item, index }">
          <NewsContent :content="item" :show-thumbnail="false" />
        </template>
        <Button
          class="w-[90%]"
          :label="t('see_more')"
          variant="primary"
          @onclick="handlePressClick"
        />
      </ContentsList>
    </div>
  </div>
  <slot />
</template>
<script setup>
const config = useRuntimeConfig();
const apiUrl = config.public.apiBase;
const { data } = await useFetch(`${apiUrl}/intros`);
const { book, gallery, news, qna, card } = data.value;

import { useRouter } from 'vue-router';
const { t, locale } = useI18n();
const translate = (target) => t(target);
const items = [
  {
    title: 'introduction',
    img: '/images/icon_intro.png',
    link: '/introduction',
  },
  { title: 'photo', img: '/images/calendar.png', link: '/gallery' },
  { title: 'qna', img: '/images/qna.png', link: '/qnas' },
];
const cardnewsList = ref([
  { img: '/images/cardnews_01.png' },
  { img: '/images/cardnews_02.png' },
  { img: '/images/cardnews_03.png' },
]);
const qnaList = ref([
  {
    title: '목사가 왜 정치하나?',
    answer:
      '정교분리는 종교의 침묵이 아니라,<br/>자유로운 발언을 위한 보호 장치입니다.',
  },
  {
    title: '극우집단',
    answer:
      '광화문집회는 애국시민의 평화집회이며,<br/>극우프레임은 정치적선동에 불과합니다.',
  },
  {
    title: '이단, 사이비',
    answer:
      '철저한 성경기반의 설교와 가르침이며,<br/>신학적 근거가 없는 정치적 공격입니다.',
  },
  {
    title: '사랑제일교회 알박기',
    answer:
      '사랑제일교회는 1954년부터 예배를 드려온<br/>투기와 무관한 교회입니다.',
  },
  {
    title: '발언 논란',
    answer:
      '대중과 소통하는 연설방식에서 비롯한 직설적인 표현이며,<br/>왜곡·과장에 불과합니다.',
  },
  {
    title: '목사가 왜 욕을 해?',
    answer:
      '단순한 막말이 아니라,<br/>신앙과 국가를 지키기위한 강한 메시지입니다.',
  },
  {
    title: '광화문에서 성조기는 왜 드는지?',
    answer:
      '단순한 친미행위가 아니라,<br/>대한민국의 자유민주주의와 한미동맹을 지키는 상징입니다.',
  },
  {
    title: '선지자?',
    answer:
      '성격적 의미에서 하나님의 뜻을 대언하는 사명을 강조한,<br/>신격화와는 무관한 개념입니다.',
  },
]);

const router = useRouter();
const handleFigureClick = () => {
  router.push('/introduction');
};
const handleQnaClick = () => {
  router.push('/qnas');
};
const handleNewsClick = (news) => {
  router.push(`/cardnews/${news.id}`);
};
const handleImgClick = (id) => {
  router.push(`/gallery/${id}`);
};
const handleGalleryClick = () => {
  router.push('/gallery');
};
const handleBookClick = (book) => {
  window.open(book.urls, '_blank', 'noopener,noreferrer');
};
const handlePressClick = () => {
  router.push('/press');
};
</script>

<style lang="scss" scoped></style>
