<template>
  <header>
    <nav>
      <RouterLink to="/favoritos">favoritos</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
  components: {
    RouterView,
    RouterLink
  },
}
</script>
<style scoped></style>
