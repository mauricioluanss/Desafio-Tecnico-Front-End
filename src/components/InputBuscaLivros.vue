<!--
Como usuário gostaria de digitar algumas palavras e ver uma lista de
livros que tenhas relação com a minha busca.
-->
<template>
  <form>
    <input v-model="pesquisa" type="text" placeholder="Digite algo: " />
    <button type="button" @click="buscaLivros">Buscar</button>

    <!--laço para imprimir na tela somente o titulo dos livros, referente a pesquisa realizada.-->
    <ul>
      <li v-for="item in resultadoPesquisa" v-bind:key="item.id">
        {{ item.volumeInfo.title }}
      </li>
    </ul>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pesquisa: '',
      resultadoPesquisa: [],
    }
  },

  props: {},

  computed: {},

  watch: {},

  methods: {
    // get para retornar o resultado da pesquisa
    buscaLivros() {
      const chamaApi = axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.pesquisa}`)
        .then((res) => {
          if (res.data.items) {
            this.resultadoPesquisa = res.data.items // salva apenas o objeto 'items' e seus dados.
            console.log(this.resultadoPesquisa)
          } else {
            this.resultadoPesquisa = []
          }
        })
        .catch((error) => {
          console.log(error)
        })
      return chamaApi

      /*
      exemplo de retorno:
      {
    "kind": "books#volumes",
    "totalItems": 1000000,
    "items": [
        {
            "kind": "books#volume",
            "id": "sD9cAeO95fwC",
            "etag": "vezR3S4ZN8c",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/sD9cAeO95fwC",
            "volumeInfo": {
                "title": "The Naruto Saga",
                "subtitle": "The Unofficial Guide",
                "authors": [
                    "Kazuhisa Fujie",
                    "Matthew Lane",
                    "Walt Wyman"
                ],
                "publisher": "DH Publishing Inc",
                "publishedDate": "2007",
                "description": "Enter the Hidden Leaf Village and uncover the many secrets of good and evil about Naruto and his quest to become the Hokage--the #1 ninja. Full color.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781932897166"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "193289716X"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 191,
                "printType": "BOOK",
                "categories": [
                    "Comics & Graphic Novels"
                ],
                "averageRating": 4,
                "ratingsCount": 13,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "0.5.6.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=sD9cAeO95fwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=sD9cAeO95fwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com.br/books?id=sD9cAeO95fwC&pg=PA23&dq=naruto&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=sD9cAeO95fwC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=sD9cAeO95fwC"
            },
            "saleInfo": {
                "country": "BR",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 17.06,
                    "currencyCode": "BRL"
                },
                "retailPrice": {
                    "amount": 17.06,
                    "currencyCode": "BRL"
                },
                "buyLink": "https://play.google.com/store/books/details?id=sD9cAeO95fwC&rdid=book-sD9cAeO95fwC&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 17060000,
                            "currencyCode": "BRL"
                        },
                        "retailPrice": {
                            "amountInMicros": 17060000,
                            "currencyCode": "BRL"
                        },
                        "giftable": true
                    }
                ]
            },
            "accessInfo": {
                "country": "BR",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com.br/books/download/The_Naruto_Saga-sample-epub.acsm?id=sD9cAeO95fwC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com.br/books/download/The_Naruto_Saga-sample-pdf.acsm?id=sD9cAeO95fwC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=sD9cAeO95fwC&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... <b>Naruto&#39;s</b> first assignment as a Genin? A. fter <b>Naruto</b>, Sasuke and Sakura graduate from the academy, their first assignment is a “survival exercise”. This is a tough test to see if <b>Naruto</b> and his teammates can forget about pursuing&nbsp;..."
            }
        },
      */
    },
  },
}
</script>

<style></style>
