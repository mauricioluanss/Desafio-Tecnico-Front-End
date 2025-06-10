<!--
Como usuário gostaria de digitar algumas palavras e ver uma lista de
livros que tenhas relação com a minha busca.

1 - fazer o formulario para pesquisar
2 - fazer com que cada letra digitada faça uma ação de busca
-->
<template>
  <form>
    <input v-model="pesquisa" type="text" placeholder="Digite algo: ">
    <button type="button" @click="resultadoPesquisa">pesquisar</button>
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
    }
  },
  computed: {},
  watch: {},
}
</script>

<style></style>
