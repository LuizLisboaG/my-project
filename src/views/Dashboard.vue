<template>
  <v-main class="background">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          class="mb-6 pt-0"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
            >
              <v-card-title v-text="card.title" class="white--text text-h5"></v-card-title>
            </v-img>
            <v-row>
              <v-card-subtitle 
                class="ml-2 text-h5 font-weight-medium"
              >
                Valor de venda:
              </v-card-subtitle>
              <v-card-subtitle 
                v-text="card.text"
                class="text-h6 green--text"
              >
              </v-card-subtitle>
              <v-card-subtitle 
                class="ml-2 text-h5 font-weight-medium"
              >
                Valor de comissão (5%):
              </v-card-subtitle>
              <v-card-subtitle 
                class="text-h6 green--text"
              >
                R$ 45.550
              </v-card-subtitle>
            </v-row>
              <v-card-text class="text-h6" v-text="card.size"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="1"
          color="orange"
          circle
        ></v-pagination>
      </div>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    data: () => ({
			drawer: false,
      page: 1,
      group: null,
      cards: [
        { title: 'Natal, Centro', src: 'https://sistema.rankim.com.br/a/imovel/e3838d4eae915318e9eb203757a0f7d5532badf4_1.jpg',  flex:3, text: "R$ 911.000,00", size: "65m² - 2 Dormitórios - 1 Vaga" },
        { title: 'Mossoró, Abolição 3', src: 'https://sistema.rankim.com.br/a/imovel/48beddf929e9ac7e92170f6ecae4058850431785_1.jpg', flex: 3, text: "R$ 911.000,00", size: "120m² - 3 Dormitórios - 2 Vagas"},
        { title: 'Natal, Petropolis', src: 'https://sistema.rankim.com.br/a/imovel/9c4d10a9d8287cc5b70a00cfcbe17e5c8b1735cc_1.jpg', flex: 3, text: "R$ 911.000,00", size: "90m² - 3 Dormitórios - 1 Vaga"},
        { title: 'Natal, Lagoa Nova', src: 'https://sistema.rankim.com.br/a/imovel/81c294d791424f91390af8d5b2054fb91657dc78_1.jpg', flex: 3, text: "R$ 911.000,00", size: "88m² - 2 Dormitórios - 2 Vagas" },
        { title: 'Natal, Ponta Negra', src: 'https://sistema.rankim.com.br/a/imovel/7dbd022ce8ed49d279caec6c13d856be11b7eb16_1.jpg', flex: 3, text: "R$ 911.000,00", size: "86m² - 2 Dormitórios - 2 Vagas" },
        { title: 'Mossoró, Centro', src: 'https://sistema.rankim.com.br/a/imovel/cb848112097d3481cc0d7b0f17c05f406cb5679e_1.jpg', flex: 3, text: "R$ 911.000,00", size: "72m² - 2 Dormitórios - 1 Vaga" },
      ],
    }),
  }
</script>