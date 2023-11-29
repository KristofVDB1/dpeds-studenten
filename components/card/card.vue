<template>
  <a :href="link?.href" class="card">
    <div class="card__image-container">
      <NuxtImg
        format="webp"
        placeholder
        class="card__image-container__image"
        src="/images/image.jpeg"
        width="350"
        height="270"
      />
    </div>
    <h3 class="card__title" v-if="title">{{ title }}</h3>
    <p v-if="description">{{ description }}</p>
    <c-button v-if="link"
      ><p>{{ link?.title }}</p></c-button
    >
  </a>
</template>

<script lang="ts" setup name="card">
import type { Card } from '~/types/card'
defineProps<Card>()
</script>

<style scoped lang="scss" src="./style.scss" />
