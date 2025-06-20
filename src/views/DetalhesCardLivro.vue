<template>
  <div v-if="detalhesLivro != null">
    <div class="row">
      <AlertFavoritos v-if="statusAlertaFavorito" :mensagem="msgAlertaFavorito" />

      <div class="col-md-4 mt-4">
        <h1>{{ titulo }}</h1>
        <img :src="thumbnail" alt="capa do livro" />
      </div>

      <div class="col-md-7 mt-5">
        autores: {{ autores }} <br />
        editora: {{ editora }} <br />
        data de publicação: {{ dataPublicacao }} <br />
        paginas: {{ numeroPaginas }} <br />
        categorias : {{ categorias }} <br />
        descrição: <span v-html="descricao" /> <br />
      </div>

      <div class="col-md-1 mt-5">
        <button type="button" class="btn" @click="favoritar">
          <IconFavoritoDesabilitado v-if="!ehFavorito" />
          <IconFavoritoHabilitado v-else />
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import { pesquisaPorId } from '@/api/pesquisa-por-id'
import AlertFavoritos from '@/components/alerts/AlertFavoritos.vue'
import IconFavoritoDesabilitado from '@/components/icons/IconFavoritoDesabilitado.vue'
import IconFavoritoHabilitado from '@/components/icons/IconFavoritoHabilitado.vue'

export default {
  components: {
    IconFavoritoDesabilitado,
    IconFavoritoHabilitado,
    AlertFavoritos,
  },

  data() {
    return {
      idLivro: '',
      detalhesLivro: null,
      statusAlertaFavorito: false,
      msgAlertaFavorito: '',
    }
  },

  mounted() {
    this.idLivro = this.$route.params.id
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
      return this.detalhesLivro.volumeInfo?.authors?.join(', ') || 'Autores não encontrados.'
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
      return this.detalhesLivro.volumeInfo?.categories?.join(' / ') || 'Categorias não encontradas.'
    },

    descricao() {
      return this.detalhesLivro.volumeInfo?.description || 'Descrição não encontrada.'
    },

    ehFavorito() {
      const favoritos = this.$store.getters.retornaFavoritos
      return favoritos.some((livro) => livro.id === this.idLivro)
    },
  },

  methods: {
    async retornaDetalhesLivro() {
      try {
        this.detalhesLivro = await pesquisaPorId(this.idLivro)
        console.log(this.detalhesLivro) //debug
      } catch (erro) {
        console.error(erro)
      }
    },

    favoritar() {
      if (!this.ehFavorito) {
        this.$store.dispatch('ChamaAdicionarFavorito', this.detalhesLivro)
        this.chamaAlertaFavorito('Livro adicionado aos favoritos!')
      } else {
        this.$store.dispatch('ChamaRemoverFavorito', this.detalhesLivro)
        this.chamaAlertaFavorito('Livro removido dos favoritos!')
      }
    },

    chamaAlertaFavorito(mensagem) {
      this.msgAlertaFavorito = mensagem
      this.statusAlertaFavorito = true

      setTimeout(() => {
        this.statusAlertaFavorito = false
      }, 3000)
    }
  },
}
</script>

<style></style>
