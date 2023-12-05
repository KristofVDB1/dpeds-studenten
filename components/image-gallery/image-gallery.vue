<template>
  <custom-carousel
    class="image-gallery"
    :wrapAround="false"
    snap-align="center"
  >
    <custom-slide v-for="(image, index) in images" :key="index">
      <div class="image-gallery__test">
        <a @click="() => showImg(index, images)">
          <NuxtImg
            class="image-gallery__image"
            :src="image?.src"
            format="png"
            placeholder
          />
        </a>
      </div>
    </custom-slide>

    <template #addons>
      <custom-pagination />
    </template>
  </custom-carousel>
  <vue-easy-lightbox
    :loop="true"
    :visible="visibleRef"
    :imgs="imgsRef"
    :index="indexRef"
    @hide="onHide"
    :rotateDisabled="true"
    :moveDisabled="true"
  />
</template>

<script setup lang="ts" name="image-gallery">
import { useEasyLightbox } from 'vue-easy-lightbox'
import type { Image } from '~/types/image'
defineProps({
  images: {
    type: Array<Image>,
  },
})

const showImg = (index: number, images?: Image[]) => {
  const links: string[] = images?.map((image) => image.src) ?? []
  indexRef.value = index
  visibleRef.value = true
  imgsRef.value = links
}

const { onHide, visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: [],
})
</script>
<style scoped lang="scss" src="./style.scss" />
