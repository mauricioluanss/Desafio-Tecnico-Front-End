<template>
  <form>
    <h3>PESQUISE O LIVRO</h3>
    <input v-model="pesquisa" type="text" placeholder="Digite 3 letras ou mais: " />

    <!--laço para mandar cada livro para dentro do component card.-->
    <ul>
      <li v-for="item in resultadoPesquisa" :key="item.id">
        <CardLivro :livro="item" />
      </li>
    </ul>
  </form>
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
      pesquisa: '',
      resultadoPesquisa: [],
    }
  },

  props: {},

  computed: {},

  watch: {
    pesquisa() {
      if (this.pesquisa.length > 2) {
        console.log(this.pesquisa) //debug
        this.buscaLivros() //chama a funcao de busca
      }
    },
  },

  methods: {
    // futuramente colocar um timeout entre o tempo que o usuario digita e a requisicao executa !!!!!!!!
    async buscaLivros() {
      try {
        this.resultadoPesquisa = await requisicao(this.pesquisa)
        console.log(this.resultadoPesquisa) // debug
      } catch (erro) {
        console.log(erro)
      }
    },
  },
}
</script>
