<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="thumbnail" class="img-fluid rounded-start" alt="capa do livro">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <RouterLink class="nav-link active" :to="`/livro/${livro.id}`">
            <h5 class="card-title">{{ titulo }}</h5>
          </RouterLink>
          <p class="card-text">{{ autor }}</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  <!--   <div>
    <RouterLink :to="`/livro/${livro.id}`">
      <img :src="thumbnail" alt="capa do livro" />
      <h3 v-if="titulo">Titulo: {{ titulo }}</h3>
      <p v-if="autor">Autor: {{ autor }}</p>
    </RouterLink>
  </div> -->
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
