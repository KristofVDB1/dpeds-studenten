<template>
  <custom-carousel
    class="image-gallery"
    :wrapAround="true"
    :items-to-show="1.9"
  >
    <custom-slide v-for="(image, index) in images" :key="index">
      <NuxtImg class="image-gallery__image" :src="image?.src" />
    </custom-slide>

    <template #addons>
      <custom-pagination />
    </template>
  </custom-carousel>
</template>

<script setup lang="ts" name="image-gallery">
import type { Image } from '~/types/image'
defineProps({
  images: {
    type: Array<Image>,
  },
})
</script>
<style scoped lang="scss" src="./style.scss" />
