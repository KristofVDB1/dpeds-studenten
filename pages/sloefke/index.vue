<template>
  <c-header
    :title="data?.content?.header?.title ?? 'title'"
    :description="data?.content?.header?.description"
    :image="data?.content?.header?.image"
    :button="data?.content?.header?.button"
  />
  <typography>
    <template
      v-if="data?.content?.paragraphs?.length"
      v-for="paragraph in data?.content?.paragraphs"
    >
      <h2 v-if="paragraph?.title">{{ paragraph?.title }}</h2>
      <p v-if="paragraph?.description">
        {{ paragraph?.description }}
      </p>
    </template>
  </typography>
  <cards :items="data?.rooms" title="Onze studentenkamers" />
</template>

<script lang="ts" setup>
import type { Room } from '~/types/room'
import type { StudentHouse } from '~/types/studentHouse'

// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('data', async () => {
  const [data, roomData] = await Promise.all([
    queryContent<StudentHouse>('sloefke/configuration').find(),
    // skip 1 because the first item is the configuration of the index
    queryContent<Room>('/sloefke').where({ _extension: 'json' }).skip(1).find(),
  ])

  return {
    content: data[0],
    rooms: roomData,
  }
})
// Redirect to 404 in case of no data
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>
