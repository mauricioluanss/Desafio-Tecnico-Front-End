<!--
Como usuário gostaria de digitar algumas palavras e ver uma lista de
livros que tenhas relação com a minha busca.

1 - fazer o formulario para pesquisar
2 - testar get na api pra buscar resultado da pesquisa quando clicar no botao
-->
<template>
  <form>
    <input v-model="pesquisa" type="text" placeholder="Digite algo: ">
    <button type="button" @click="requisicao(pesquisa)">pesquisar</button>
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

  methods: {
    resultadoPesquisa() {
      console.log(this.pesquisa);
    },
    // get para retornar o resultado da pesquisa
    requisicao(search) {
      const chamaApi = axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
      return chamaApi;
    }
  },
  computed: {},

  watch: {
    pesquisa() {

    }
  },
}
</script>

<style></style>
