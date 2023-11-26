<template>
  <div class="room">
    <h2 class="room__title">Details kamer</h2>
    <div class="room__details">
      <table class="room__details__table">
        <tbody class="room__details__table__body">
          <tr
            class="room__details__table__row"
            v-for="detail in details"
            v-if="details?.length"
          >
            <th scope="row" class="room__details__table__header">
              {{ detail?.title }}
            </th>
            <td class="room__details__table__data">
              {{ detail?.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts" name="room-details">
import type { RoomDetail } from '~/types/room'
defineProps({
  details: {
    type: Array<RoomDetail>,
  },
})
</script>
<style scoped lang="scss" src="./style.scss" />
