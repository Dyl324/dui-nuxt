<script setup lang="ts">
defineProps<{
  i: number
  img: string
}>()
</script>

<template>
  <div
    class="img-block md:min-h-auto relative z-[3] order-3 flex min-h-[50vh] w-[90%] items-center justify-center self-center pt-[20px] opacity-50 transition-opacity duration-300 sm:w-[70%] md:static md:order-none md:w-[40%] md:pt-0"
    :class="`${i}`"
  >
    <img
      :src="img"
      loading="lazy"
      alt="Sign up illustration"
      class="inline-block w-full align-middle"
    />
  </div>
</template>
