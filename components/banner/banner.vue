<template>
  <div class="banner">
    <span class="banner__title"> {{ title }} </span>
    <span class="banner__content"> {{ content }} </span>
  </div>
</template>

<script setup lang="ts" name="banner">
import type { Banner } from '~/types/banner'
defineProps<Banner>()
</script>
<style scoped lang="scss" src="./style.scss" />
