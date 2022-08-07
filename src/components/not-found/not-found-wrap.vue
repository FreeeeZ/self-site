<template>
  <div class="notfound-wrap">
    <div class="container">
      <picture class="notfound-wrap__picture">
        <source type="image/webp" srcset="@/assets/images/global/whale-404.webp">
        <img src="@/assets/images/global/whale-404.svg" alt="Whale">
      </picture>
      <h1 class="notfound-wrap__title">404</h1>
      <h2 class="notfound-wrap__subtitle">Oops! You were not supposed to find a crying whale.</h2>
      <router-link to="/" class="button button-primary">
        Go to main page
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './styles/notfound-wrap.scss';
</style>
