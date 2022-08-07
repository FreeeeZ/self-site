<template>
  <div class="main-header__navigation-mobile">
    <div class="main-header__navigation-mobile__burger">
      <button
        class="main-header__navigation-mobile__burger-button"
        @click="toggleBurgerMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        class="main-header__navigation-mobile__burger-menu"
        :class="isBurgerOpened ? 'opened' : ''"
        v-click-outside="clickOutsideBurger"
      >
        <ul>
          <li v-for="(item, index) in formattedRouter" :key="index">
            <router-link :to="item.path">
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const formattedRouter = router.options.routes.filter(route => route.name !== 'NotFound' && route.name !== 'PathForNotFound')

let isBurgerOpened = ref(false)

function toggleBurgerMenu () {
  isBurgerOpened.value = !isBurgerOpened.value
}

function clickOutsideBurger () {
  if (isBurgerOpened.value) {
    isBurgerOpened.value = false
  }
}
</script>

<style lang="scss" scoped>
@use './styles/navigation-mobile.scss';
</style>
