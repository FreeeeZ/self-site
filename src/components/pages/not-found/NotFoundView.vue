<template>
  <div class="not-found-wrap">
    <div class="container">
      <picture class="not-found-wrap__picture">
        <source type="image/webp" srcset="@/assets/images/global/whale-404.webp">
        <img src="@/assets/images/global/whale-404.svg" alt="Whale">
      </picture>
      <h1 class="not-found-wrap__title">404</h1>
      <h2 class="not-found-wrap__subtitle">Oops! You were not supposed to find a crying whale.</h2>
      <RouterLink to="/" class="button button-primary button-uppercase">
        Go to main page
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'styles/not-found-view';
</style>
