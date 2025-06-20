import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CardLivro from './CardLivro.vue'

/*
ESTUDAR MAIS ISSO


Arrange (Arranjar/Preparar): crio as variaveis e os objetos de que o teste precisa.
Act (Agir): logica que preciso testa.
Assert (Afirmar/Verificar): valida se resultado da logica saiu como se espera.
*/

describe('CardLivro.vue', () => {
  it('deve exibir o titulo do livro corretamente quando a prop livro é passada', () => {
    //arrange
    const livroMock = {
      id: '123',
      volumeInfo: {
        title: 'Titulo de livro teste',
        authors: ['Mauricio'],
        imageLinks: {
          thumbnail: 'url_da_imagem.jpg',
        },
      },
    }

    //act
    const wrapper = mount(CardLivro, {
      props: {
        livro: livroMock,
      },
    })

    //assert
    expect(wrapper.text()).toContain('Titulo de livro teste')
  })
})
