<template>
  <div class="card mb-3 mt-2" style="max-width: 400px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="thumbnail" class="img-fluid rounded-start" alt="capa do livro">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <RouterLink class="nav-link active" :to="`/livro/${livro.id}`">
            <h5 class="card-title fs-6 text-light">{{ titulo }}</h5>
          </RouterLink>
          <p class="card-text"><small class="text-white-50">{{ autor }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
<style scoped>
.card {
  height: 140px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0);
  border: none;
}

.card:hover {
  transform: scale(1.02);
  transition: transform 0.2s;
  background-color: rgba(240, 248, 255, 0.062);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
}

small {
  font-size: 12px;
  font-style: italic;
  line-height: 10q;
}
</style>
