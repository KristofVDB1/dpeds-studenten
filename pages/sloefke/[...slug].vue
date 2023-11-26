<template>
  <c-header
    :title="data?.title ?? 'title'"
    :description="data?.description"
    :image="data?.image"
  />
  <typography>
    <template
      v-if="data?.paragraphs?.length"
      v-for="paragraph in data?.paragraphs"
    >
      <h2 v-if="paragraph?.title">{{ paragraph?.title }}</h2>
      <p v-if="paragraph?.description">
        {{ paragraph?.description }}
      </p>
    </template>
  </typography>
  <room-details :details="data?.details" />
  <image-gallery :images="data?.images" />
</template>

<script setup lang="ts">
import type { Room } from '~/types/room'

const { path } = useRoute()

const { data } = await useAsyncData('data', async () => {
  const [data] = await Promise.all([
    queryContent<Room>(`${path}/configuration`).find(),
  ])

  return data[0]
})
// Redirect to 404 in case of no data
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>
