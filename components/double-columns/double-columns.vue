<template>
  <div class="double-columns">
    <slot />
  </div>
</template>

<script lang="ts" setup name="double-columns">
defineProps({
  items: {
    type: Array<Object>,
  },
})
</script>

<style scoped lang="scss" src="./style.scss" />
