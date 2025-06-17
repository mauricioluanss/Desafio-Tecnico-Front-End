<template>
  <form>
    <h3>PESQUISE O LIVRO</h3>
    <input v-model="input" type="text" placeholder="Digite 3 letras ou mais: " />

    <!--laço para mandar cada obj livro para dentro do component filho, e lá mostrar na tela.-->
    <ul>
      <li v-for="item in livrosEncontrados" :key="item.id">
        <CardLivro :livro="item" />
      </li>
    </ul>
  </form>

  <!-- botoes de paginacao -->
  <div>
    <button :disabled="pagAtual === 1" @click="paginaAnterior">anterior</button>
    <button :disabled="desabilitaProximaPag" @click="proximaPagina">proxima</button>
  </div>
</template>

<script>
import CardLivro from './CardLivro.vue'
import { requisicao } from '@/api/requisicao'

export default {
  components: {
    CardLivro,
  },

  data() {
    return {
      input: '',
      livrosEncontrados: [],
      pagAtual: 1,
      resultadosPorPag: 10,
      totalResultados: 0,
    }
  },

  computed: {
    startIndex() {
      return ((this.pagAtual - 1) * this.resultadosPorPag)
    },

    desabilitaProximaPag() {
      return (this.pagAtual * this.resultadosPorPag >= this.totalResultados)
    }
  },

  watch: {
    // chama a requisicao a api a cada 3 caracteres digitados
    input() {
      if (this.input.length > 2) {
        console.log(this.input) //debug
        this.consultarLivros() //chama a funcao de busca
      }
    },
  },

  methods: {
    // futuramente colocar um timeout entre o tempo que o usuario digita e a requisicao é chamada !!!!!!!!
    async consultarLivros() {
      try {
        const resposta = await requisicao(this.input, this.startIndex)
        this.livrosEncontrados = resposta.items
        this.totalResultados = resposta.totalItems
        console.log(this.livrosEncontrados) // debug
      } catch (erro) {
        console.log(erro)
      }
    },

    proximaPagina() {
      this.pagAtual += 1
      this.consultarLivros()
    },

    paginaAnterior() {
      this.pagAtual -= 1
      this.consultarLivros()
    },
  },
}
</script>
