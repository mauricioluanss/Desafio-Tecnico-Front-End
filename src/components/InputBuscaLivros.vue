<template>
  <div class="row">
    <div class="col-md-4 mt-4">
      <div class="p-4 bg-dark border rounded-3">
        <h2 class="text-white">Bem-vindo!</h2>
        <p class="lead text-white">
          Este projeto utiliza a API do Google Books para disponibilizar a busca de livros. É possível buscar, ver
          detalhes e favoritar seus livros preferidos.
        </p>
        <hr>
        <p>
          O objetivo foi estudar conceitos de Vue.js e relembrar HTML, CSS e JS.
        </p>
      </div>
    </div>

    <div class="col-md-8">
      <form>
        <h5 class="alert">
          Digite o nome do livro que deseja na barra de pesquisa!
        </h5>
        <input class="form-control" type="text" placeholder="Digite 3 letras ou mais: "
          aria-label="input pra busca do livro" id="floatingInputValue" v-model="input" />
        <div class="row">
          <div v-for="livro in livrosEncontrados" :key="livro.id" class="col-12 col-md-6 col-lg-4 mb-4">
            <CardLivro :livro="livro" />
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="row">
    <div class="col align-items-center d-flex justify-content-center mt-4">
      <button type="button" class="btn btn-dark" :disabled="paginaAtual === 1" @click="paginaAnterior">Anterior</button>
      <span class="mx-2">{{ paginaAtual }}</span>
      <button type="button" class="btn btn-dark" :disabled="desabilitaProximaPag"
        @click="proximaPagina">Proxima</button>
    </div>
  </div>
</template>

<script>
import CardLivro from './CardLivro.vue'
import { pesquisaGeral } from '@/api/pesquisa-geral'

export default {
  components: {
    CardLivro,
  },

  data() {
    return {
      input: '',
      livrosEncontrados: [],
      paginaAtual: 1,
      itensPorPagina: 6,
      totalResultados: 0,
      searchTimeout: null,
    }
  },

  computed: {
    startIndex() {
      return (this.paginaAtual - 1) * this.itensPorPagina
    },

    desabilitaProximaPag() {
      return this.paginaAtual * this.itensPorPagina >= this.totalResultados
    },
  },

  watch: {
    input() {
      clearTimeout(this.searchTimeout)

      if (this.input.length > 2) {
        this.searchTimeout = setTimeout(() => this.consultarLivros(), 500)
      }
      this.paginaAtual = 1
    },
  },

  methods: {
    async consultarLivros() {
      try {
        const resposta = await pesquisaGeral(this.input, this.startIndex, this.itensPorPagina)
        this.livrosEncontrados = resposta.items
        this.totalResultados = resposta.totalItems
        console.log(this.livrosEncontrados) // debug
      } catch (erro) {
        console.error(erro)
      }
    },

    proximaPagina() {
      this.paginaAtual += 1
      this.consultarLivros()
    },

    paginaAnterior() {
      this.paginaAtual -= 1
      this.consultarLivros()
    },
  },
}
</script>
