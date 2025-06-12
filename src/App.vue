<template>
  <header>
    <nav></nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>

<script>
import RouterView from 'vue-router'

export default {
  components: {
    RouterView,
  },
}
</script>
<style scoped></style>
