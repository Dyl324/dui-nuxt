<script setup lang="ts">
defineProps<{
  i: number
}>()
</script>

<template>
  <div
    class="dot absolute bottom-[50%] z-[99] order-2 -mt-[6px] mb-0 h-[12px] w-[12px] self-center rounded-full bg-gray-200 transition-all duration-100 md:relative md:z-[3] md:order-none md:-mb-[6px] md:self-auto"
    :class="`${i}`"
  />
</template>
