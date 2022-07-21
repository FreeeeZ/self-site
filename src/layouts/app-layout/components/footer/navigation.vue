<template>
  <div class="main-footer__navigation">
    <nav>
      <ul>
        <li v-for="item in this.$router.options.routes">
          <router-link :to="item.path">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>