<script setup lang="ts">
const items = [
  {
    img: '/img/img1.png',
    title: 'Saving and planning',
    label: '2023',
    text: 'After saving long and hard my partner of 6 years and I had the opportunity to build our very own family home, this was our next big step in life. We had the plans, the loan, the builder – everything was lined up. 💸💑',
  },
  {
    img: '/img/img1.png',
    title: 'Adversity',
    label: '2024',
    text: '2024 comes around and we started briskly in January, things were going alright for the most part. Then as time begin to pass, less and less started to happen on site and without much warning our builder went into administration. Just like that, we were left with a half-finished house, no builder and 90% of our loan money gone. 🏠🏗️',
  },
  {
    img: '/img/img1.png',
    title: 'Choices',
    label: '2025',
    text: 'I had two choices: panic (which admittedly I did a little of, we are all human) or figure it out.',
  },
  {
    img: '/img/img1.png',
    title: 'Figuring it out...',
    label: '2025',
    text: 'Thankfully, having near a decade of experience being a draftsman myself and after catering designs to over 200 families who built new homes or renovated what they had - I slowly learnt to understand the construction process in depth. Being put in this situation I needed a way to get the build done so that we could move into the home that we had worked so hard for. 🔨',
  },
  {
    img: '/img/img1.png',
    title: 'Taking control',
    label: '2025',
    text: 'I put together these templates initially for myself, and used them on my very own build. They worked so well that I decided to share with everyone who might be in a similar situation. I took control of my build. I worked with trades directly, navigated approvals & certifiers and got the house finished at the best price – without a builder holding my hand. 👷‍♂️',
  },
  {
    img: '/img/img1.png',
    title: 'What I learned',
    label: '2025',
    text: 'That experience taught me something huge: most homeowners (including myself) aren’t prepared for the realties of building or renovating as there is so much unknown and quite frankly it can be overwhelming. And I get it – it’s a minefield of paperwork, decisions and unexpected costs. 📚',
  },
  {
    img: '/img/img1.png',
    title: 'Figure it out',
    label: '2025',
    text: 'This is why I put all of my resources together into clear, easy-to-use templates that help the everyday mum & dad homeowners manage their build or renovation on their own. Whether you’re working with a builder, hiring trades yourself, or even going full owner-builder – these templates will save you time, money and a whole lot of stress.',
  },
]
</script>
<template>
  <div>
    <DuiTimeLine :items="items" />
  </div>
</template>
