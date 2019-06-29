<template>
  <div>
    <div class="search"><input type="search" v-model="currentNr" v-on:keyup="getBrandByNr($event.target.value)"></div>
    <div class="brands-list">
      <div v-for="brand in brands" class="brand">
        <router-link :to="{ path: `/price/${brand.nr}` }" tag="a" >
          {{brand.brand}}
        </router-link>
        <p>Название товара:<span>{{brand.name}}</span></p>
        <span  v-on:click="selectNr(brand.nr)">{{brand.nr}}</span>
      </div>



    </div>
  </div>

</template>
<script>

  import axios from 'axios';



  export default {

    data() {
      return {
        currentNr: "kl2",
        brands: [
          {
            "nr": "AFFF001",
            "brand": "Miles"
          },
          {
            "nr": "NF-255L",
            "brand": "AMC Filter"
          },
          {
            "nr": "70238",
            "brand": "Asam"
          },
          {
            "nr": "70249",
            "brand": "Asam"
          },
          {
            "nr": "ADN12317",
            "brand": "BLUE PRINT"
          },
          {
            "nr": "ADN12324",
            "brand": "BLUE PRINT"
          },
          {
            "nr": "ADV182314",
            "brand": "BLUE PRINT"
          },
          {
            "nr": "0 450 905 030",
            "brand": "Bosch"
          },
          {
            "nr": "PP 836",
            "brand": "Filtron"
          },
          {
            "nr": "103 023 756",
            "brand": "Hans Pries"
          },
          {
            "nr": "FS2070",
            "brand": "JS ASAKASHI"
          },
          {
            "nr": "KL2",
            "brand": "Knecht"
          },
          {
            "nr": "50013032",
            "brand": "Kolbenschmidt"
          },
          {
            "nr": "50013632",
            "brand": "Kolbenschmidt"
          },
          {
            "nr": "WK830",
            "brand": "Mann-filter"
          },
          {
            "nr": "WK830/7",
            "brand": "Mann-filter"
          },
          {
            "nr": "J1331021",
            "brand": "Nipparts"
          },
          {
            "nr": "FS8002",
            "brand": "SAKURA Automotive"
          },
          {
            "nr": "ST314",
            "brand": "SCT Germany"
          }
        ]
      }
    },

    created() {
      this.getBrandByNr("kl2");
    },

    methods: {
      selectNr(nr) {

        if (nr == undefined)
          this.currentNr = this.brands[0].nr;
        else
          this.currentNr = nr;

        this.getBrandByNr(this.currentNr);
      },

      getBrandByNr(nr) {

        if (nr==undefined||nr.trim().length==0)
          return;

        axios.get(`/brand_by_nr/${nr}`)
          .then(response => {
            if (response.data.result.status!=undefined)
              this.brands = [];
            else
              this.brands = response.data.result;
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      }
    }
  }
</script>


<style lang="scss">

  h1 {
    width: 100%;
    line-height: 1
  }

  h2 {
    width: 100%;
    line-height: 1;
    color: lightgray;
  }

  .search {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    input {
      padding: 10px;
      border: 1px lightblue solid;
      width: 300px;
    }

  }

  .brands-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .brand {
      width: 200px;
      padding: 10px;
      box-sizing: border-box;
      /* margin-bottom: 15px; */
      border: 1px solid #41b883;
      font-weight: 100;
      font-size: 18px;
      cursor: pointer;
      margin: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      &:hover {
        border: 1px #215c42 solid;
      }

      p{
        width:100%;
        word-break: break-word;
      }
      span {
        width: 100%;
        color: red;
        font-weight: 900;
        cursor: pointer;

        &:hover {
          color: #a41b00;
        }
      }
    }
  }
</style>
