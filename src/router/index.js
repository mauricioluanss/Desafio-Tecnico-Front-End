import { createRouter, createWebHistory } from 'vue-router'
import PgBuscaLivros from '@/views/PgBuscaLivros.vue'
import DetalhesCardLivro from '@/views/DetalhesCardLivro.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PgBuscaLivros,
  },
  {
    path: '/livro/:id', // : é pra eu joar o id do livro depois
    name: 'detalhes-livro',
    component: DetalhesCardLivro,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
