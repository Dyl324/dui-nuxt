<script setup lang="ts">
defineProps<{
  i: number
  item: {
    label: string
    title: string
    text: string
  }
}>()
</script>

<template>
  <div
    class="content-wrap align-center flex h-[50vh] w-[90%] justify-center pb-[20px] md:h-auto md:w-[40%] md:justify-end"
    :class="`${i}`"
  >
    <div class="relative self-center text-left">
      <div
        class="step align-center bg-white/2 relative isolate z-[2] flex rounded-2xl p-[12%] opacity-50 shadow-2xl backdrop-blur-3xl transition-opacity duration-300"
        :class="`${i}`"
      >
        <div>
          <div
            class="text-uppercase text-lg font-bold tracking-wide text-orange-400"
          >
            {{ item.label }}
          </div>
          <div class="font-normal text-white">
            <div class="my-3 flex text-2xl">{{ item.title }}</div>
            <p>
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
