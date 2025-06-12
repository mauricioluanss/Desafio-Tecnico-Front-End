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
import { /*RouterLink,*/ RouterView } from 'vue-router'

export default {
  components: {
    //RouterLink,
    RouterView,
  },
}
</script>
<style scoped></style>
