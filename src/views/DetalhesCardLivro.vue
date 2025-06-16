<template>
  <header>
  </header>

  <div v-if="detalhesLivro != null">
    <h1>{{ titulo }}</h1>
    <img :src="thumbnail" alt="capa do livro" /> <br />
    autores: {{ autores }} <br />
    editora: {{ editora }} <br />
    data de publicação: {{ dataPublicacao }} <br />
    paginas: {{ numeroPaginas }} <br />
    categorias : {{ categorias }} <br />
    descrição: <span v-html="descricao" /> <br />
  </div>

  <div>
    <button @click="favoritar">{{ !ehFavorito ? 'Favoritar' : 'Remover dos favoritos' }}
    </button>
  </div>
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
    this.idLivro = this.$route.params.id // captura o id do livro assim que o componente é montado
    this.retornaDetalhesLivro()
  },

  computed: {
    thumbnail() {
      return this.detalhesLivro.volumeInfo?.imageLinks?.thumbnail || 'https://placehold.co/130x180'
    },

    titulo() {
      return this.detalhesLivro.volumeInfo?.title || 'Titulo não encontrado.'
    },

    autores() {
      return this.detalhesLivro.volumeInfo?.authors /* .join(', ') */ || 'Autor não encontrado.'
    },

    editora() {
      return this.detalhesLivro.volumeInfo?.publisher || 'Edirora não encontrada.'
    },

    dataPublicacao() {
      return this.detalhesLivro.volumeInfo?.publishedDate || 'Data de publicação não encontrada.'
    },

    numeroPaginas() {
      return this.detalhesLivro.volumeInfo?.pageCount || 'Numero de páginas não encontrado.'
    },

    categorias() {
      return (
        this.detalhesLivro.volumeInfo?.categories /* .join(' - ')*/ || 'Categorias não encontradas.'
      )
    },

    descricao() {
      return this.detalhesLivro.volumeInfo?.description || 'Descrição não encontrada.'
    },

    ehFavorito() {
      const favoritos = this.$store.getters.retornaFavoritos;
      const idAtual = this.idLivro;
      return favoritos.some((livro) => {
        if (livro.id === idAtual) {
          return true
        } else {
          return false
        }
      })
    }
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

    favoritar() {
      if (!this.ehFavorito) {
        this.$store.dispatch('ChamaAdicionarFavorito', this.detalhesLivro)
      } else {
        this.$store.dispatch('ChamaRemoverFavorito', this.detalhesLivro)
        console.log("Este livro já é favorito!")
      }
    }
  },
}
</script>

<style></style>
