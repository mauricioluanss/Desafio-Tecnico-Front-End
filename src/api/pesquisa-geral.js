// req para realizar a pesquisa na api
import axios from 'axios'

export const pesquisaGeral = async (pesquisa, startIndice, itensPorPagina) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${pesquisa}&startIndex=${startIndice}&maxResults=${itensPorPagina}`,
    )
    return {
      items: response.data.items,
      totalItems: response.data.totalItems,
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
