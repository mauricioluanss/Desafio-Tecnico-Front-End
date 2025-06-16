<template>
  <div>
    <RouterLink :to="`/livro/${livro.id}`">
      <img :src="thumbnail" alt="capa" />
      <p v-if="titulo">Titulo: {{ titulo }}</p>
      <p v-if="autor">Autor: {{ autor }}</p>
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
    // recebe os dados do componente pai (InputBuscaLivros).
    livro: {
      type: Object,
      required: true,
    },
  },

  computed: {
    thumbnail() {
      if (this.livro.volumeInfo.imageLinks?.thumbnail) {
        return this.livro.volumeInfo.imageLinks.thumbnail
      } else {
        return "https://placehold.co/130x180"
      }
    },

    titulo() {
      if (this.livro.volumeInfo.title) {
        return this.livro.volumeInfo.title
      } else {
        return null
      }
    },

    autor() {
      if (this.livro.volumeInfo.authors) {
        return this.livro.volumeInfo.authors.join(', ') // imprime os valores do array separados por ,
      } else {
        return null
      }
    },
  },
}
</script>
<style></style>
