<script setup lang="ts">
defineProps<{
  i: number
}>()
</script>

<template>
  <div class="absolute bottom-[50%] h-full flex-col items-center">
    <div
      class="scroll-animate absolute bottom-0 h-full w-[6px] origin-[50%_0%] bg-orange-400 transition-transform duration-1000 transform-3d"
      :class="`${i}`"
      style="
        transform: translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      "
    />
    <div class="h-full w-[6px] origin-[50%_0%] bg-gray-200" />
  </div>
</template>
