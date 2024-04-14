<template>
  <c-header v-bind="headerData" />
  <typography>
    <h2>Op kot in Mechelen!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </typography>
  <cards :items="cardItems" title="Onze studentenkoten" />
  <c-footer />
</template>

<script lang="ts" setup>
import type { Card } from '~/types/card'
import type { Header } from '~/types/header'
const cardItems: Array<Card> = [
  {
    title: 'Sloefke',
    description: 'Lorem ipsum',
    link: {
      href: '/sloefke',
      title: 'Lees meer',
    },
    image: {
      src: 'images/sloefke/sloefke_1.jpg',
      width: 350,
      height: 270,
    },
  },
]

const headerData: Header = {
  title: 'De Pauw en de Schutter',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisi aliquam aliquet.',
  image: {
    src: 'images/sloefke/sloefke_1.jpg',
    width: 700,
    height: 540,
  },
  button: {
    title: 'Lees meer',
  },
}
</script>
