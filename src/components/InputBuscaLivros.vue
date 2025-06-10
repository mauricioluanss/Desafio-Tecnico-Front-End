<!--
Como usuário gostaria de digitar algumas palavras e ver uma lista de
livros que tenhas relação com a minha busca.
-->
<template>
  <form>
    <input v-model="pesquisa" type="text" placeholder="Digite algo: ">
    <button type="button" @click="buscaLivros">Buscar</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pesquisa: '',
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    // get para retornar o resultado da pesquisa
    buscaLivros() {
      const chamaApi = axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.pesquisa}`)
        .then((res) => {
          console.log(res.data) //mudar para salvar o resultado no data
        })
        .catch((error) => {
          console.log(error); // exibir mensagem de erro na tela, talvez
        });
      return chamaApi;
    }
  },
}
</script>

<style></style>
