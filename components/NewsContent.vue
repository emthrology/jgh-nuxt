<template>
  <div class="flex flex-row justify-between px-4 my-4">
    <div
      v-if="props.showThumbnail && content.notice_photo"
      @click="handleNewsClick"
      class="w-[80px] h-[80px] mr-2"
    >
      <img class="object-fit" :src="content.notice_photo" alt="item" />
    </div>
    <div class="flex flex-1 flex-col justify-between items-start min-h-[80px]">
      <p class="cursor-pointer" @click="handleNewsClick">{{ content.title }}</p>
      <div class="w-full flex flex-row justify-between">
        <p class="text-zinc-400">
          {{ dayjs(content.created_at).format('YYYY-MM-DD') }}
        </p>
        <Button
          class="w-[16px] h-[16px] flex justify-center items-center"
          round="3xl"
          variant="default"
          @onclick="shareContent"
        >
          <img src="/images/share_black.png" alt="" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';

import { useRouter } from 'vue-router';
const props = defineProps({
  content: Object,
  showThumbnail: {
    type: Boolean,
    default: true,
  },
});
const shareContent = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: '전광훈 - 광화문 국민의장',
        text: '광화문 집회 정보',
        url: window.location.href,
      });
      console.log('공유 성공');
    } catch (error) {
      console.error('공유 실패:', error);
    }
  } else {
    alert('공유 기능이 지원되지 않는 브라우저입니다.');
  }
};

const router = useRouter();
const handleNewsClick = () => {
  router.push(`/press/${props.content.id}`);
};
</script>

<style lang="scss" scoped></style>
