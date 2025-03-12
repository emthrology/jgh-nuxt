<template>
    <span class="text-xl font-bold">{{getDay}}일</span>
    <div v-for="(item,index) in props.schedule" :key="index"
      class="flex flex-col items-center p-4 m-4 rounded-xl drop-shadow-2xl bg-white w-[75%] min-h-[300px]"
    >
      <h3 class="text-xl font-bold">{{ item.title }}</h3>
      <div class="w-full">
        <p>날짜:{{ dayjs(item.start_at).format('MM-DD') }}  ~ {{ dayjs(item.end_at).format('MM-DD') }}</p>
        <p>시간:{{ dayjs(item.start_at).format('HH:MM') }} ~ {{ dayjs(item.end_at).format('HH:MM') }}</p>
        <p>장소:{{ item.name_ko }}</p>
        <p v-html="item.content"></p>
      </div>
    </div>
</template>

<script setup>
  import dayjs from 'dayjs'
  const props = defineProps({
    selectedDay: String,
    schedule: {
      type: Array,
    },
    
  });
  const defaultSchedule = reactive({
    title: '일정이 없습니다.',
    start_at: '',
    end_at: '',
    name_ko: '',
    content: '',
  })
  const getDay = computed(() => {
    return dayjs(props.selectedDay).date()
  })
</script>

<style lang="scss" scoped>

</style>