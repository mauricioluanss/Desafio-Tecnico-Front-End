<template>
  <div id="app" class="d-flex flex-column min-vh-100 text-bg-dark"> <!-- text-bg-dark -->
    <header>
      <NavBar />
    </header>

    <main class="container mt-4 flex-grow-1">
      <RouterView />
    </main>

    <FooterBar />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue'
import FooterBar from './components/FooterBar.vue';

export default {
  components: {
    RouterView,
    NavBar,
    FooterBar
  },
}
</script>
