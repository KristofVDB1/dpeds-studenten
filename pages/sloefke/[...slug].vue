<template>
  <c-header
    :title="data?.title ?? 'title'"
    :description="data?.description"
    :image="data?.image"
  />
  <typography>
    <div v-if="data?.paragraphs?.length" v-for="paragraph in data?.paragraphs">
      <h2 v-if="paragraph?.title" v-html="paragraph?.title" />
      <div v-if="paragraph?.description">
        <p>
          {{ paragraph?.description }}
        </p>
      </div>
    </div>
  </typography>
  <room-details :details="data?.details" />
  <image-gallery :images="data?.images" />
  <banner v-if="data?.banner" v-bind="data?.banner" />
  <c-footer />
</template>

<script setup lang="ts">
import type { Room } from '~/types/room'

const { params } = useRoute()

const { data } = await useAsyncData('data', async () => {
  const [data] = await Promise.all([
    queryContent<Room>(`sloefke/${params?.slug[0]}/configuration`).find(),
  ])

  return data[0]
})
// Redirect to 404 in case of no data
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>

<style scoped lang="scss" src="./style.scss" />
