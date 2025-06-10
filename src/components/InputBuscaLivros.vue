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
        <CardLivro :livro="item" /> <!--CardLivro.vue-->
      </li>
    </ul>
  </form>
</template>

<script>
import axios from 'axios'
import CardLivro from './CardLivro.vue'

export default {
  components: {
    CardLivro
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
    // get para retornar o resultado da pesquisa
    // depois migrar para a pasta /api pra separar as requisições do coponent
    async buscaLivros() {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.pesquisa}`)
        if (response.data.items) {
          this.resultadoPesquisa = response.data.items // salva só o objeto 'items' da resposta, e dados que estao dentro.
        } else {
          this.resultadoPesquisa = []
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
