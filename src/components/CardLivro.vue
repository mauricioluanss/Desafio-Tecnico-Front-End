<template>
  <div>
    <!--<img :src="thumbnail" alt="capa" />-->
    {{ titulo }} - {{ autor }}
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
    /* thumbnail() {
      return this.livro.volumeInfo.imageLinks.thumbnail
    }, */
    titulo() {
      return this.livro.volumeInfo.title
    },
    autor() {
      if (this.livro.volumeInfo.authors) {
        return this.livro.volumeInfo.authors.join(', ')
      } else {
        return "autor(res) não encontrado(s)"
      }
    },
  },
}
</script>
<style>
div {
  background: wheat;
}
</style>
