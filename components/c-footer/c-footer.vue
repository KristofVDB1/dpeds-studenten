<template>
  <footer class="footer">
    <section class="footer__container">
      <div class="footer__container__logo">
        <a href="/"><h4 class="footer__title">De Pauw en De Schutter</h4></a>
      </div>
      <div class="footer__container__links">
        <h4 class="footer__title">Links</h4>
        <ul v-if="data?.links?.length">
          <li v-for="link in data?.links">
            <a :href="link?.href">{{ link?.title }}</a>
          </li>
        </ul>
      </div>
      <div class="footer__container__contact">
        <h4 class="footer__title">Contact</h4>
        <ul>
          <li v-if="data?.details?.phone">
            <a :href="'tel:' + data?.details?.phone">{{
              data?.details?.phone
            }}</a>
          </li>
          <li v-if="data?.details?.email">
            <a :href="'mailto:' + data?.details?.email">{{
              data?.details?.email
            }}</a>
          </li>
          <li v-if="data?.details?.address">
            <a target="_blank" :href="data?.details?.address?.href">{{
              data?.details?.address?.text
            }}</a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts" name="footer">
import type { Footer } from '~/types/footer'

const data: Footer = {
  image: {
    src: 'https://www.w3schools.com/w3images/avatar2.png',
    alt: 'Avatar',
  },
  links: [
    {
      href: '/sloefke',
      title: 'Sloefke',
    },
  ],
  details: {
    email: 'kristof.vandenbrouck@gmail.com',
    phone: '+32476271508',
    address: {
      text: 'Schuttersvest 13 2800 Mechelen',
      href: 'https://maps.app.goo.gl/RHJhyXasi85Zpurg7',
    },
  },
}
</script>

<style scoped lang="scss" src="./style.scss" />
