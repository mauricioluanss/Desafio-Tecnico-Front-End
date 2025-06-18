<template>
  <div id="app">
    <NavBar />
  </div>

  <main class="container mt-4">
    <RouterView />
  </main>

  <footer></footer>
</template>

<script>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    RouterView,
    NavBar
  },
}
</script>
<style scoped></style>
