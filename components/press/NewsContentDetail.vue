<template>
  <div class="w-full min-h-[550px]">
    <div class="mt-4 flex flex-col items-center">
      <div class="w-full p-4">
        <p class="text-xl mb-4">{{ contentData.title }}</p>

        <p class="mt-1 text-right">
          {{ dayjs(contentData.created_at).format('YYYY-MM-DD') }}
        </p>
        <hr class="h-px my-4 bg-black border-0 dark:bg-gray-400" />
        <div class="min-h-[300px] mb-4" v-html="contentData.content"></div>
        <Button
          class="w-full h-[40px]"
          label="목록"
          variant="secondary"
          @onclick="handleClick"
        />
        <div
          class="w-full mt-4 flex flex-row justify-between border-b border-gray-200"
        >
          <div class="bg-zinc-300">
            <div
              class="flex flex-col justify-evenly items-center min-w-[70px] min-h-[50px]"
            >
              <p class="text-sm py-4 text-zinc-700 font-bold">이전글</p>
              <p class="text-sm py-4 text-zinc-700 font-bold">다음글</p>
            </div>
          </div>
          <div class="flex flex-1">
            <div
              class="flex flex-col pl-4 justify-evenly items-start min-h-[50px]"
            >
              <p
                class="title-nowrap cursor-pointer leading-8 py-2 text-sm text-gray-500"
                @click="routeTo(prev)"
              >
                {{ prev?.title ?? '이전 글이 없습니다.' }}
              </p>
              <p
                class="title-nowrap cursor-pointer leading-8 py-2 text-ellipsis text-sm text-gray-500"
                @click="routeTo(next)"
              >
                {{ next?.title ?? '다음 글이 없습니다.' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';

const props = defineProps({
  id: String,
});
const config = useRuntimeConfig();
const apiUrl = config.public.apiBase;
const { data, error } = await useFetch(`${apiUrl}/notices/${props.id}`, {
  params: {
    board: 'pastor',
    category: '31',
    pageType: 'list',
  },
});
const contentData = data.value.data;
const { prev, next } = data.value;

const router = useRouter();
const handleClick = () => {
  // console.log('click')
  router.back();
};
const routeTo = (route = null) => {
  if (!route) {
    return;
  }
  const { id } = route;
  router.push(`/press/${id}`);
};
</script>

<style lang="css" scoped>
.title-nowrap {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
