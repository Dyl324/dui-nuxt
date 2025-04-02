<script setup lang="ts">
const props = defineProps<{
  items: {
    img: string
    title: string
    label: string
    text: string
  }[]
}>()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          for (let i = 0; i < props.items.length; i++) {
            if (target.classList.contains(`${i}`)) {
              const dot = document.getElementsByClassName(`dot ${i}`)[0]
              if (dot) {
                const dotElement = dot as HTMLElement
                setTimeout(function () {
                  dotElement.classList.remove('bg-gray-200')
                  dotElement.classList.add('bg-orange-400')
                  dotElement.classList.remove('w-[12px]')
                  dotElement.classList.add('w-[24px]')
                  dotElement.classList.remove('h-[12px]')
                  dotElement.classList.add('h-[24px]')
                }, 800)
              }
              const scroll = document.getElementsByClassName(
                `scroll-animate ${i}`,
              )[0]
              if (scroll) {
                const scrollElement = scroll as HTMLElement
                scrollElement.style.transform =
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
              }
              const step = document.getElementsByClassName(`step ${i}`)[0]
              const img = document.getElementsByClassName(`img-block ${i}`)[0]
              if (step && img) {
                const stepElement = step as HTMLElement
                const imgElement = img as HTMLElement
                setTimeout(function () {
                  stepElement.style.opacity = '1'
                  imgElement.style.opacity = '1'
                }, 800)
              }
            }
          }
        }
      }
    },
    {
      threshold: 1,
    },
  )

  const elements = document.querySelectorAll('.content-wrap')
  elements.forEach((element) => observer.observe(element))
})
</script>

<template>
  <div class="relative mx-auto mb-10 flex w-full flex-col items-start">
    <div class="sticky top-0 flex flex-col items-center justify-center">
      <div class="relative flex flex-col items-center justify-center">
        <div v-for="(item, i) in items" :key="i">
          <DuiTimeLineItem v-if="i === 0">
            <DuiTimeLineImg :i="i" :img="item.img" />
            <DuiTimeLineDot :i="i" />
            <DuiTimeLineContent :i="i" :item="item" />
          </DuiTimeLineItem>

          <DuiTimeLineItem v-else-if="i % 2 !== 0">
            <DuiTimeLineBar :i="i" />
            <DuiTimeLineContent :i="i" :item="item" />
            <DuiTimeLineDot :i="i" />
            <DuiTimeLineImg :i="i" :img="item.img" />
          </DuiTimeLineItem>

          <DuiTimeLineItem v-else>
            <DuiTimeLineImg :i="i" :img="item.img" />
            <DuiTimeLineDot :i="i" />
            <DuiTimeLineContent :i="i" :item="item" />
            <DuiTimeLineBar :i="i" />
          </DuiTimeLineItem>
        </div>
      </div>
    </div>
  </div>
</template>
