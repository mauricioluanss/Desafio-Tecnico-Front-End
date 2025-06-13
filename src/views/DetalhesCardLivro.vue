<template>
  <!-- AQUI VOU MONTAR COMO INFORMAÇÕES VÃO APARECER
  pageCount": 1392,
        "printedPageCount": 1392,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion"
  -->
  <header>
    <nav>
      <RouterLink to="/">pagina inicial</RouterLink>
    </nav>
  </header>

  <h1>Pagina de detalhes do livro</h1>
  <div v-if="detalhesLivro != null">
    <!-- criar computed para cada propriedade. validar se existem antes e tratar erros -->
    Imagem: <img :src="detalhesLivro.volumeInfo.imageLinks.thumbnail" alt="capa"> <br>
    titulo: {{ detalhesLivro.volumeInfo.title }} <br>
    autores: {{ detalhesLivro.volumeInfo.authors }} <br>
    data de publicação: {{ detalhesLivro.volumeInfo.publishedDate }} <br>
    Paginas: {{ detalhesLivro.volumeInfo.pageCount }} <br>
    {{ detalhesLivro.volumeInfo.printedPageCount }} <br>
    {{ detalhesLivro.volumeInfo.printType }} <br>
    {{ detalhesLivro.volumeInfo.maturityRating }} <br>
  </div>
</template>

<script>
import { requisicao } from '@/api/detalhes-livro'
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  },

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

  computed: {

  },

  methods: {
    // realiza a requisicao para a api com o parâmetro do id do livro
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
