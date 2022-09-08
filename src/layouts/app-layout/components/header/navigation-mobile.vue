<template>
  <div class="main-header__navigation-mobile">
    <div class="main-header__navigation-mobile__burger">
      <button
        class="main-header__navigation-mobile__burger-button"
        :class="isBurgerOpened ? 'opened' : ''"
        @click="toggleBurgerMenu(!isBurgerOpened)"
      >
        <span />
        <span />
        <span />
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
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const formattedRouter = router.options.routes.filter(route => route.name !== 'NotFound' && route.name !== 'PathForNotFound')

let isBurgerOpened = ref(false)
let isBurgerButtonClicked = ref(false)

watch(() => route.name,() => {
  toggleBurgerMenu(false)
})

function toggleBurgerMenu (state: boolean) {
  isBurgerOpened.value = state

  if (isBurgerButtonClicked.value) {
    isBurgerOpened.value = false
  }
}

function clickOutsideBurger (event: any) {
  isBurgerButtonClicked.value = event.path[0].className.includes('main-header__navigation-mobile__burger-button opened');

  if (isBurgerOpened.value) {
    isBurgerOpened.value = false
  }
}
</script>

<style lang="scss" scoped>
@use './styles/navigation-mobile.scss';
</style>
