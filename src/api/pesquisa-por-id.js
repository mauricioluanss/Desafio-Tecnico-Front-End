// realiza a req na api pra obter os detalhes do livro selecionado. Id do livro vai como parâmetro
import axios from 'axios'

export const pesquisaPorId = async (idLivro) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${idLivro}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
