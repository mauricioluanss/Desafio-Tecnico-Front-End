<!--
Como usuário gostaria de digitar algumas palavras e ver uma lista de
livros que tenhas relação com a minha busca.
-->
<template>
  <form>
    <input v-model="pesquisa" type="text" placeholder="Digite algo: " />
    <button type="button" @click="buscaLivros">Buscar</button>

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

  watch: {},

  methods: {
    async buscaLivros() {
      this.resultadoPesquisa = await requisicao(this.pesquisa)
      console.log(this.pesquisa) // debug
    },
  },
}
</script>
