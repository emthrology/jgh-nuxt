<template>
  <div class="mt-[85px] mb-[120px]">
    <NavComponent current-menu="오해와 진실" />
    <component :is="getComponent" />
  </div>
</template>

<script setup>
import {
  LazyQnasQ1,
  LazyQnasQ2,
  LazyQnasQ3,
  LazyQnasQ4,
  LazyQnasQ5,
  LazyQnasQ6,
  LazyQnasQ7,
  LazyQnasQ8,
} from '#components';

const route = useRoute();
const { id } = route.params;
const componentContainer = ref([
  {
    id: 1,
    component: LazyQnasQ1,
  },
  {
    id: 2,
    component: LazyQnasQ2,
  },
  {
    id: 3,
    component: LazyQnasQ3,
  },
  {
    id: 4,
    component: LazyQnasQ4,
  },
  {
    id: 5,
    component: LazyQnasQ5,
  },
  {
    id: 6,
    component: LazyQnasQ6,
  },
  {
    id: 7,
    component: LazyQnasQ7,
  },
  {
    id: 8,
    component: LazyQnasQ8,
  },
]);
const getComponent = computed(() => {
  const { component } = componentContainer.value.find((item) => item.id == id);
  return component;
});
</script>

<style lang="scss" scoped></style>
