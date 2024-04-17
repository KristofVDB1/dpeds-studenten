<template>
  <c-header v-bind="headerData" />
  <typography>
    <h2>Op kot in Mechelen!</h2>
    <p>
      Ben je op zoek naar de perfecte plek om te wonen tijdens je studie in het
      bruisende centrum van Mechelen? Zoek niet verder! Onze website biedt een
      uitgebreid assortiment aan studentenkamers die voldoen aan al jouw wensen
      en behoeften. Mechelen, een stad doordrenkt van geschiedenis en cultuur,
      biedt niet alleen een fantastische omgeving om te studeren, maar ook een
      levendige gemeenschap waarin je je snel thuis zult voelen.
    </p>

    <p>
      Onze studentenkamers zijn strategisch gelegen in het hart van deze
      prachtige stad, waardoor je gemakkelijk toegang hebt tot hogescholen,
      openbaar vervoer, winkels, restaurants en alle andere voorzieningen die
      Mechelen te bieden heeft. Of je nu op zoek bent naar een gezellige studio
      voor jezelf of een gedeeld appartement met vrienden, wij hebben de ideale
      accommodatie voor jou. Onze kamers zijn modern, comfortabel en volledig
      uitgerust, zodat je je kunt concentreren op je studie en genieten van het
      studentenleven in Mechelen.
    </p>
  </typography>
  <cards :items="cardItems" title="Onze studentenkoten" />
  <c-footer />
</template>

<script lang="ts" setup>
import type { Card } from '~/types/card'
import type { Header } from '~/types/header'
import type { StudentHouse } from '~/types/studentHouse'

// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('data', async () => {
  const [data] = await Promise.all([
    queryContent<StudentHouse>('sloefke/configuration').find(),
    // skip 1 because the first item is the configuration of the index
  ])

  return {
    content: data[0],
  }
})
// Redirect to 404 in case of no data
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const cardItems: Array<Card> = [
  {
    title: data?.value?.content?.header?.title ?? '',
    description: data?.value?.content?.header?.description ?? '',
    link: {
      href: '/sloefke',
      title: 'Lees meer',
    },
    image: data?.value?.content?.header.image,
  },
]

const headerData: Header = {
  title: 'De Pauw en de Schutter',
  image: data?.value?.content?.header.image,
}
</script>
