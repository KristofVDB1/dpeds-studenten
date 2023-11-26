<template>
  <h2 class="title">{{ title }}</h2>
  <double-columns>
    <card
      v-for="card in items"
      :title="card?.title"
      :description="card?.description"
      :link="card?.link"
    />
  </double-columns>
</template>

<script lang="ts" setup name="cards">
import type { Card } from '~/types/card'
defineProps({
  items: {
    type: Array<Card>,
  },
  title: String,
})
</script>

<style scoped lang="scss" src="./style.scss" />
