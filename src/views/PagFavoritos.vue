<template>
  <header>
    <nav>
      <RouterLink to="/">pagina inicial</RouterLink>
    </nav>
  </header>
  <ul>
    <h3>FAVORITOS</h3>
    <li v-for="item in livrosFavoritos" :key="item.id">
      <CardLivro :livro="item" />
    </li>
  </ul>
</template>

<script>
import CardLivro from '@/components/CardLivro.vue';
import { RouterLink } from 'vue-router';

export default {
  components: {
    CardLivro,
    RouterLink
  },

  computed: {
    livrosFavoritos() {
      return this.$store.getters.retornaFavoritos
    }
  },
}
</script>
