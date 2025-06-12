// req para realizar a pesquisa na api
import axios from 'axios'

export const requisicao = async (pesquisa) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${pesquisa}`)
    return response.data.items
  } catch (error) {
    console.error(error)
    throw error
  }
}
