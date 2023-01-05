<template>
  <div class="main-footer__socials-list">
    <a
      v-for="(social, index) in socialsList"
      :key="index"
      class="main-footer__socials-list-item"
      rel="noopener noreferrer nofollow"
      target="_blank"
      :href="social.linkUrl"
    >
      <picture class="socials-list-item__picture">
        <source type="image/webp" :srcset="social.imageWebP">
        <img :src="social.imageSvg" alt="Main photo">
      </picture>
      <p class="socials-list-item__title">
        {{ social.title }}
      </p>
    </a>
  </div>
</template>

<script lang="ts" setup>
import TgIconSvg from '@/assets/images/socials/tg-icon.svg';
import TgIconWebP from '@/assets/images/socials/tg-icon.webp';
import LinkedInIconSvg from '@/assets/images/socials/linkedin-icon.svg';
import LinkedInIconWebP from '@/assets/images/socials/linkedin-icon.webp';
import GithubIconSvg from '@/assets/images/socials/github-icon.svg';
import GithubIconWebP from '@/assets/images/socials/github-icon.webp';
import EmailIconSvg from '@/assets/images/socials/email-icon.svg';
import EmailIconWebP from '@/assets/images/socials/email-icon.webp';

const socialsList = [
  {
    imageSvg: TgIconSvg,
    imageWebP: TgIconWebP,
    title: 'Telegram',
    linkUrl: 'https://t.me/shellvladik'
  },
  {
    imageSvg: LinkedInIconSvg,
    imageWebP: LinkedInIconWebP,
    title: 'Linkedin',
    linkUrl: 'https://www.linkedin.com/in/vladislav-shell/'
  },
  {
    imageSvg: GithubIconSvg,
    imageWebP: GithubIconWebP,
    title: 'Github',
    linkUrl: 'https://github.com/FreeeeZ'
  },
  {
    imageSvg: EmailIconSvg,
    imageWebP: EmailIconWebP,
    title: 'Email',
    linkUrl: 'mailto:shell-vladislav@mail.ru'
  },
];
</script>

<style lang="scss" scoped>
@use '../styles/social-list';
</style>
