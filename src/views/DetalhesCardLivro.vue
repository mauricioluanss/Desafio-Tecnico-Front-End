<template>
  <h1>Pagina de detalhes do livro</h1>
  <!-- AQUI VOU MONTAR COMO INFORMAÇÕES VÃO APARECER -->
</template>

<script>
import { requisicao } from '@/api/detalhes-livro'

export default {
  data() {
    return {
      idLivro: '',
      detalhesLivro: null,
    }
  },

  mounted() {
    this.idLivro = this.$route.params.id
    this.retornaDetalhesLivro()
  },

  methods: {
    // realiza a requisicao para a api com o parâmetro do id do livro slecionaado.
    async retornaDetalhesLivro() {
      try {
        this.detalhesLivro = await requisicao(this.idLivro)
        console.log(this.detalhesLivro) //debug
      } catch (erro) {
        console.error(erro)
      }
    },
  },
}
</script>

<style></style>
