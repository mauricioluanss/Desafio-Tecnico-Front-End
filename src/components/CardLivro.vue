<template>
  <div>
    <RouterLink :to="`/livro/${livro.id}`">
      <img :src="thumbnail" alt="capa" />{{ titulo }} - {{ autor }} - {{ publishedDate }}
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
    /* idLivro() {
      return this.livro.id
    }, */
    thumbnail() {
      // INSERIR LÓGICA PARA VALIDAR SE EXISTE A PROPRIEADE imageLinks !!!!!!!!!!!!!!!
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
        return "titulo não encontrado."
      }
    },
    autor() {
      if (this.livro.volumeInfo.authors) {
        return this.livro.volumeInfo.authors.join(', ') // imprime os valores do array separados por ,
      } else {
        return "autor não encontrado."
      }
    },

    publishedDate() {
      if (this.livro.volumeInfo.publishedDate) {
        return this.livro.volumeInfo.publishedDate
      } else {
        return "ano de publicação não encontrado."
      }
    }
  },
}
</script>
<style></style>
