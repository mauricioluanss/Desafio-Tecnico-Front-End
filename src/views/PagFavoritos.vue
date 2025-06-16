<template>
  <ul>
    <h3>FAVORITOS</h3>
    <li v-for="item in livrosFavoritos" :key="item.id">
      <CardLivro :livro="item" />
    </li>
  </ul>
</template>

<script>
import CardLivro from '@/components/CardLivro.vue';

export default {
  components: {
    CardLivro,
  },

  computed: {
    livrosFavoritos() {
      return this.$store.getters.retornaFavoritos
    }
  },
}
</script>
