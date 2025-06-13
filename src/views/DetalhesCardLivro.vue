<template>
  <header>
    <nav>
      <RouterLink to="/">pagina inicial</RouterLink>
    </nav>
  </header>

  <h1>Pagina de detalhes do livro</h1>
  <div v-if="detalhesLivro != null">
    <!-- implementar marcação html correta  -->
    <img :src="thumbnail" alt="capa do livro" /> <br />
    titulo: {{ titulo }} <br />
    autores: {{ autores }} <br />
    editora: {{ editora }} <br />
    data de publicação: {{ dataPublicacao }} <br />
    paginas: {{ numeroPaginas }} <br />
    categorias : {{ categorias }} <br />
    descrição: <span v-html="descricao" /> <br />
  </div>
</template>

<script>
import { requisicao } from '@/api/detalhes-livro'
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink,
  },

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

    /*
    tive essa ideia pra aplicar N/A em todos os campos
    que não existitem, mas desisti pois ficaria muito feio
    validaSeCampoExiste(parametro) {
      if (!parametro) {
        return 'N/A'
      } else {
        return parametro
      }
    }*/
  },
}
</script>
<!--
RESPOSTA DA API PARA ESTUDO

{
    "kind": "books#volume",
    "id": "FYfkEAAAQBAJ",
    "etag": "veA2Nh4w8E4",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/FYfkEAAAQBAJ",
    "volumeInfo": {
        "title": "Naruto 21",
        "authors": [
            "Masashi Kishimoto"
        ],
        "publisher": "Panini S.p.A.",
        "publishedDate": "2023-11-27",
        "description": "Sasuke sceglie di accettare l’invito di Orochimaru e di fuggire dal Villaggio della Foglia, ma una squadra d’eccezione, formata da soli genin, parte subito alla sua ricerca!",
        "industryIdentifiers": [
            {
                "type": "ISBN_10",
                "identifier": "8828769939"
            },
            {
                "type": "ISBN_13",
                "identifier": "9788828769934"
            }
        ],
        "readingModes": {
            "text": true,
            "image": true
        },
        "pageCount": 192,
        "printedPageCount": 209,
        "printType": "BOOK",
        "categories": [
            "Comics & Graphic Novels / Manga / General",
            "Comics & Graphic Novels / Manga / Action & Adventure"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.2.2.0.preview.3",
        "panelizationSummary": {
            "containsEpubBubbles": true,
            "containsImageBubbles": true,
            "epubBubbleVersion": "4ab00e2f6a18421b_A",
            "imageBubbleVersion": "4ab00e2f6a18421b_A"
        },
        "comicsContent": true,
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/publisher/content?id=FYfkEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72wTS9H8D2ev7QVw0_hcceLkVe_TUf02Llp9To_-fCXABI9LEiTtGRIzjW7RqNW_LBaCtdMnJmuDnEsU0Vkk3p5HB42Z2IZYNHbbPwyJNKK7w7ZbeDYupXLDxI6Of-ACAuuUksG&source=gbs_api",
            "thumbnail": "http://books.google.com/books/publisher/content?id=FYfkEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72sKzqivOWiJwu0gSy6G22jIcpjirC8E0OXq0V6BIw4sfaaUTajQhV_KukOXTuChnLjNqUq8Ur34aXWR7Ol8K1HGI0UbWyC2YezTn2G2dCD9rRobitt7T4Es_FoJTFtU45QPeAk&source=gbs_api",
            "small": "http://books.google.com/books/publisher/content?id=FYfkEAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72n1rMdtMBpO456mF1i-PrBAvlxZyGTKTMMGkMVqnIWy0Pjfcjt1OJJP7UB62S549e43Vuyqx2YE6wBHDpyaQRe25Z2L-Nf-hg090Ovok4bAjUt08vvgAv2HvZUJrGNI1UegvqL&source=gbs_api",
            "medium": "http://books.google.com/books/publisher/content?id=FYfkEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE70kkwjxMUHAz_HuO6H3JbNUUG9xkglfGOCoMLWJUNrcotrAumeoiPlhWXzy1hgibhTYKzQ_FZu84zY6FEKWrmF-xIoVvJ5Ot3YCBStqu9iedhbeUgYFVxqR98F2PEMAbWoPSw_S&source=gbs_api",
            "large": "http://books.google.com/books/publisher/content?id=FYfkEAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71P4N33xiXo31XJSYGcMAZI3kgYZrrShGoRWzvIJAwEMOsFUlodtv8FlHbthm-msNtgdr6lHvvWPtidB7tKzMy7oX3oDPPJo8dG3dAi9NlOgB2cB6_dxnkMNNF_lROMi5TAugej&source=gbs_api",
            "extraLarge": "http://books.google.com/books/publisher/content?id=FYfkEAAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE71X4fYL8pO04E4r0cnaXK2fPCcPxmYy5Cfc4SHoTAqjH32MWntuC9UULVhDOIZwFOLrm7Uth5yKqungVxQC5bu5txoNkex4Q4kkHlkAwWcjgRq7Oo4245ea-b8WAF6PLU5ipDQQ&source=gbs_api"
        },
        "language": "it",
        "previewLink": "http://books.google.com.br/books?id=FYfkEAAAQBAJ&hl=&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=FYfkEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=FYfkEAAAQBAJ"
    },
    "layerInfo": {
        "layers": [
            {
                "layerId": "geo",
                "volumeAnnotationsVersion": "6"
            }
        ]
    },
    "saleInfo": {
        "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
    },
    "accessInfo": {
        "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com.br/books/download/Naruto_21-sample-epub.acsm?id=FYfkEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com.br/books/download/Naruto_21-sample-pdf.acsm?id=FYfkEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=FYfkEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
    }
}

-->
<style></style>
