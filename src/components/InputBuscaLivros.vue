<template>
  <form>
    <h3>PESQUISE O LIVRO</h3>
    <input class="form-control" type="text" placeholder="Digite 3 letras ou mais: "
      aria-label="input pra busca do livro" id="floatingInputValue" v-model="input" />
    <!-- <input v-model="input" type="text" placeholder="Digite 3 letras ou mais: " /> -->

    <ul>
      <li v-for="livro in livrosEncontrados" :key="livro.id">
        <CardLivro :livro="livro" />
      </li>
    </ul>
  </form>

  <div>
    <button :disabled="paginaAtual === 1" @click="paginaAnterior">Anterior</button>
    <button :disabled="desabilitaProximaPag" @click="proximaPagina">Proxima</button>
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
      itensPorPagina: 5,
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
        this.searchTimeout = setTimeout(() => this.consultarLivros(), 400)
      }
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
