<template>
  <div class="pt-8 flex flex-col items-center">
    <client-only>
      <DatePicker 
        v-model="date" 
        locale="ko" 
        :attributes="attributes" 
        :select-attribute="selectAttribute" 
        @update:pages="onPageChange"
        @dayclick="onDayClick" />
    </client-only>
  </div>
</template>

<script setup>
import { DatePicker } from 'v-calendar';
import { ref } from 'vue';
const props = defineProps({
  schedules: Array
})
const date = ref(new Date());
const attributes = computed(() => [
  {
    key: 'black-dot',
    dot: {
      style: {
        backgroundColor: 'black'
      }
    },
    dates: props.schedules.map(dataString => new Date(dataString))
  }
]);

// 선택된 날짜 스타일링
const selectAttribute = ref({
  key: 'selected',
  highlight: 'red',

})

const emit = defineEmits(['selectDate', 'changePage'])
// 날짜 클릭 이벤트 처리
const onDayClick = (day) => {
  emit('selectDate', day.date);
}
const currentPage = ref({ month: new Date().getMonth() + 1, year: new Date().getFullYear() });
const shouldUpdateAttributes = (newPage) => {
  // 현재 페이지와 새로운 페이지를 비교하여 변경 여부를 판단
  return newPage[0].month !== currentPage.value.month || newPage[0].year !== currentPage.value.year;
};
const onPageChange = (newPage) => {
  emit('changePage',newPage[0]);
}


</script>
