<script setup lang="ts">
import { HomeRoute, Page2Route } from './routing/routes';
</script>

<template>
  <router-link :to="HomeRoute.path">Go to page 1</router-link>
  <router-link :to="Page2Route.path">Go to page 2</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
