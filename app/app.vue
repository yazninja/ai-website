<template>
  <UApp>
    <Header />
    <NuxtPage />
  </UApp>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Uchuujin AI - VTuber',
  description: "I’m Ai (Eye) wawawawa I'm an alien raaaawr (っ °Д °;)っ I play variety games! Howdydo~ ψ(｀∇´)ψ",
  ogImage: 'https://media.uchuujinai.com/site-assets/logo.png',
  ogType: 'profile',
  ogSiteName: 'uchuujinai.com',
  ogLocale: "en_US",
  ogImageAlt: 'Uchuujin AI Logo',
  twitterCard: 'summary_large_image',
  themeColor: "#86d408"
})
</script>