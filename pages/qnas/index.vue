<template>
  <div class="mt-[85px] mb-[120px]">
    <NavComponent current-menu="오해와 진실" />
    <div class="p-8 flex">
      <div class="flex flex-col">
        <div class="pl-1 text-[36px] font text-left font-BookkMuyngjo">Q&A</div>
        <div
          class="text-[36px] font-bold font text-center text-[#AA1212] font-BookkMuyngjo"
        >
          오해에 가려진 진실
        </div>
      </div>
    </div>
    <div class="mb-4 border-b border-gray-300"></div>
    <AccodionList :items="qnaList" @click-detail="routeDetail" />
    <!-- <QnasComponent /> -->
  </div>
</template>

<script setup>
const router = useRouter();
const routeDetail = (data) => {
  console.log('id of questionClicked:', data.id);
  router.push(`/qnas/${data.id}`);
};
// 아코디언 데이터
const qnaList = ref([
  {
    id: 1,
    title: '목사가 왜 정치하나?',
    answer:
      '정교분리는 종교의 침묵이 아니라,<br/>자유로운 발언을 위한 보호 장치입니다.',
  },
  {
    id: 2,
    title: '극우집단',
    answer:
      '광화문집회는 애국시민의 평화집회이며,<br/>극우프레임은 정치적선동에 불과합니다.',
  },
  {
    id: 3,
    title: '이단, 사이비',
    answer:
      '철저한 성경기반의 설교와 가르침이며,<br/>신학적 근거가 없는 정치적 공격입니다.',
  },
  {
    id: 4,
    title: '사랑제일교회 알박기',
    answer:
      '사랑제일교회는 1954년부터 예배를 드려온<br/>투기와 무관한 교회입니다.',
  },
  {
    id: 5,
    title: '발언 논란',
    answer:
      '대중과 소통하는 연설방식에서 비롯한 직설적인 표현이며,<br/>왜곡·과장에 불과합니다.',
  },
  {
    id: 6,
    title: '목사가 왜 욕을 해?',
    answer:
      '단순한 막말이 아니라,<br/>신앙과 국가를 지키기위한 강한 메시지입니다.',
  },
  {
    id: 7,
    title: '광화문에서 성조기는 왜 드는지?',
    answer:
      '단순한 친미행위가 아니라,<br/>대한민국의 자유민주주의와 한미동맹을 지키는 상징입니다.',
  },
  {
    id: 8,
    title: '선지자?',
    answer:
      '성격적 의미에서 하나님의 뜻을 대언하는 사명을 강조한,<br/>신격화와는 무관한 개념입니다.',
  },
]);
</script>

<style lang="scss" scoped></style>
