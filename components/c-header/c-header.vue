<template>
  <header class="header">
    <navigation />
    <div class="header__text-container">
      <div class="header__text-container__content">
        <h1 class="header__text-container__content__title" v-if="title">
          {{ title }}
        </h1>
        <div class="header__text-container__content__text">
          <p v-if="description">
            {{ description }}
          </p>
        </div>
        <div v-if="button?.link">
          <c-button><p>Hello world</p></c-button>
        </div>
      </div>
    </div>
    <div class="header__image-container" v-if="image">
      <div class="header__image-container__wrapper">
        <NuxtImg
          preload
          format="webp"
          placeholder
          class="header__image-container__wrapper__image"
          :src="image?.src ?? '/images/image.jpeg'"
          :width="image?.width ?? 700"
          :height="image?.height ?? 540"
        />
        <div class="header__image-container__wrapper__gradient" />
      </div>
    </div>
    <div></div>
  </header>
</template>

<script setup lang="ts" name="header">
import type { Header } from '~/types/header'
defineProps<Header>()
</script>
<style scoped lang="scss" src="./style.scss" />
