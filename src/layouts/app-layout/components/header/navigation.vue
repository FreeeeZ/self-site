<template>
  <div class="main-header__navigation">
    <nav>
      <ul>
        <li v-for="(item, index) in this.$router.options.routes" :key="index">
          <router-link :to="item.path" v-if="item.name !== 'NotFound'">
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
  @use './styles/navigation';
</style>