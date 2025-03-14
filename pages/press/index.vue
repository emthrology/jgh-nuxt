<template>
  <div class="mt-[85px] mb-[120px] flex flex-col items-center">
    <NavComponent current-menu="보도자료" />
    <!-- <h1 class="mt-8 mb-4 text-2xl font-bold">보도 자료</h1> -->
    <ContentsList title="보도 자료" :list="responseData.data">
      <template #item="{ item, index }">
        <NewsContent :content="item" :show-thumbnail="false" />
      </template>
      <Button
        class="w-[90%]"
        label="더보기"
        variant="primary"
        @onclick="handleClick"
      />
    </ContentsList>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const apiUrl = config.public.apiBase;
const page = ref(1);
const currentList = ref([]);
const { data, refresh, error } = await useFetch(`${apiUrl}/notices`, {
  key: `data-${page.value}`,
  params: {
    board: 'pastor',
    category: '31',
    pageType: 'list',
    page: page,
  },
});
const responseData = data.value;
currentList.value = [...currentList.value, ...responseData.data];
const { links, meta } = responseData;

const handleClick = () => {
  console.log('더보기 클릭');
  if (meta.current_page < meta.last_page) {
    page.value++;
    refresh();
  } else {
    alert('마지막 페이지입니다.');
  }
};
</script>

<style lang="scss" scoped></style>
