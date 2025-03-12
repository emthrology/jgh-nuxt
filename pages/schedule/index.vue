<template>
  <div class="mt-[60px] mb-[120px] flex flex-col items-center">
    <NavComponent current-menu="일정" />
    <h1 class="mt-8 mb-4 text-2xl font-bold">일정</h1>

    <div class="mt-4 pb-4 w-[90%] rounded-2xl bg-zinc-200 flex flex-col items-center">
      <Calendar :schedules="schedules" @select-date="changeSelectDate" @changePage="onPageChange"/>
      <hr class="h-px my-4 w-[70%] bg-gray-50 border-0 dark:bg-gray-400">
      <div class="flex flex-col items-center w-full">
        <ScheduleComponent :selectedDay="selectedDay" :schedule="selectedSchedule"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import dayjs from 'dayjs'

  const config = useRuntimeConfig()
  const apiUrl = config.public.apiBase;
  const today = new Date();
  const year = ref(dayjs(today).format('YYYY'));
  const month = ref(dayjs(today).format('MM'));
  // const {data, refresh, error} = await useAsyncData(`data-${year.value}-${month.value}`,() => $fetch(  `${apiUrl}/notices`, {
  //   params: {
  //     board:'assembly',
  //     category:'2',
  //     pageType:'main',
  //     year: year.value,
  //     month: month.value
  //   }
  // })
  // )
const {data, refresh, error} = await useFetch(`${apiUrl}/notices/`, {
    lazy: true,
    // key: `data-${year.value}-${month.value}`,
    params: {
      board:'assembly',
      category:'2',
      pageType:'main',
      year: year,
      month: month
    }
  })

  // schedules를 computed 속성으로 변경
  const schedules = computed(() => {
    if (data.value) {
      return data.value.map(schedule => schedule.start_at)
    }
    return []
  })

  const scheduleDays = data.value.map(schedule => schedule.start_at)
  // schedules.value = scheduleDays;
  const selectedSchedule = ref([])


  const selectedDay = ref(
    dayjs(new Date()).format('YYYY-MM-DD')
  );
  const changeSelectDate = (date) => {
    const forrmattedDate = dayjs(date).format('YYYY-MM-DD')
    const jsdate = dayjs(forrmattedDate);
    const year = jsdate.year() // 연도: 2025
    const month = jsdate.month() + 1 // 월 (0부터 시작하므로 +1 필요): 2
    const day = jsdate.date() // 일: 27
    selectedDay.value = forrmattedDate;
    const selectedScheduleInfo = data.value.filter(schedule => schedule.start_at.includes(forrmattedDate));
    
    if(selectedScheduleInfo) {
      selectedSchedule.value = [...selectedScheduleInfo];
    }
  }


  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }
  const debouncedRefresh = debounce((currentYear, currentMonth) => {
    refresh({
      params: {
        year: currentYear,
        month: currentMonth
      }
    })
  }, 300)
  const onPageChange = (page) => {
    year.value = dayjs(page.id).format('YYYY');
    month.value = dayjs(page.id).format('MM');
    // handleUpdate();
  }
  watch([year, month], () => {
    debouncedRefresh(year.value, month.value)
  }, { immediate: true })  

  // 데이터 갱신이 필요할 때 debouncedRefresh 호출
  const handleUpdate = () => {
    debouncedRefresh(year.value, month.value)
  }
  onMounted(() => {
    changeSelectDate(today.value);
  })
</script>

<style lang="scss" scoped>

</style>