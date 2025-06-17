<template>
  <h3>FAVORITOS</h3>

  <ul>
    <li v-for="livroFavorito in livrosFavoritos" :key="livroFavorito.id">
      <CardLivro :livro="livroFavorito" />
    </li>
  </ul>
</template>

<script>
import CardLivro from '@/components/CardLivro.vue'

export default {
  components: {
    CardLivro,
  },

  computed: {
    livrosFavoritos() {
      return this.$store.getters.retornaFavoritos
    },
  },
}
</script>
