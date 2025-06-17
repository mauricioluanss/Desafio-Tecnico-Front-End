<template>
  <div>
    <RouterLink :to="`/livro/${livro.id}`">
      <img :src="thumbnail" alt="capa do livro" />
      <h3 v-if="titulo">Titulo: {{ titulo }}</h3>
      <p v-if="autor">Autor: {{ autor }}</p>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    // herda os obj livros do componente pai (InputBuscaLivros).
    livro: {
      type: Object,
      required: true,
    },
  },

  computed: {
    thumbnail() {
      return this.livro.volumeInfo.imageLinks?.thumbnail || 'https://placehold.co/130x180'
    },

    titulo() {
      return this.livro.volumeInfo?.title?.toUpperCase() || 'Titulo não encontrado'
    },

    autor() {
      return this.livro.volumeInfo?.authors?.join(', ') || 'Autor não encontrado'
    },
  },
}
</script>
<style></style>
