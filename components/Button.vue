<template>
  <button
    class="border border-gray-300 shadow-sm py-1 mt-1 font-bold"
    :class="{
      'rounded-lg': props.round === 'lg',
      'rounded-2xl': props.round === '2xl',
      'rounded-3xl': props.round === '3xl',

      'bg-white': props.variant === 'primary',
      'bg-black': props.variant === 'secondary',
      'bg-red-500': props.variant === 'danger',
      'bg-zinc-200': props.variant === 'default',

      'text-sky-600': props.variant === 'primary',
      'text-yellow-50': props.variant === 'secondary',
      'text-[#fff]': props.variant === 'danger',

      'cursor-not-allowed': props.disabled,
    }"
    :disabled="props.disabled"
    @click="handleClick"
  >
    {{ props.label }}
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  label: String,
  round: {
    type: String,
    default: 'lg',
  },
  onClick: Function,
  disabled: Boolean,
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'danger', 'default'].includes(value),
  },
});

const emit = defineEmits(['onclick']);

const handleClick = () => {
  emit('onclick');
};
</script>

<style lang="scss" scoped></style>
