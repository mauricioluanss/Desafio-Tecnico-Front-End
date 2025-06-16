import { createStore } from 'vuex'

export default createStore({
  state: {
    favoritos: [],
  },

  mutations: {
    ADICIONAR_FAVORITO(state, livro) {
      state.favoritos.push(livro)
    },

    REMOVER_FAVORITO(state, livroARemover) {
      const filtro = (livro) => livro.id !== livroARemover.id
      const novaLista = state.favoritos.filter(filtro)
      state.favoritos = novaLista
    },
  },

  actions: {
    ChamaAdicionarFavorito(context, livro) {
      context.commit('ADICIONAR_FAVORITO', livro)
    },

    ChamaRemoverFavorito(context, livro) {
      context.commit('REMOVER_FAVORITO', livro)
    },
  },

  getters: {
    retornaFavoritos: (state) => {
      return state.favoritos
    },
  },
})
