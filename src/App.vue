<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    HeaderComponent
  }
};
</script>

<style>
#app {
  font-family: "Nunito";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>