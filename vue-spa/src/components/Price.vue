<template>
  <div>
    <div class="search"><input type="search" v-model="currentNr" v-on:keyup="getPriceByNrFirm($event.target.value)"></div>
    <div class="price-list">
      <a v-for="price in priceList" v-on:click="getPriceByNrFirm(price.nr)" class="price"> Название производителя:{{price.brand}}<span
        v-on:click="selectNr(price.nr)">{{price.nr}}</span>
        <p>Название автозапчасти: <span>{{price.name}}</span></p>
        <p>Дата, время на которое актуальны данные: <span>{{price.upd}}</span></p>
        <p><span>{{price.price}} {{price.currency}}</span></p>
        <p>Кол-во позиций на складе: <span>{{price.stock}} </span></p>
        <p>Кол-во позиций доступных под заказ: <span>{{price.sorder}}</span> </p>
        <p>Средний срок поставки: <span>{{price.delivery}}</span> </p>
        <p>Минимальное кол-во для заказа: <span>{{price.minq}}</span> </p>
        <router-link :to="{ path: `/product/${price.gid}` }" tag="a" >
          ID-товара: <span>{{price.gid}}</span>
        </router-link>

      </a>
    </div>
  </div>

</template>
<script>

  import axios from 'axios';


  export default {
    props: ['nr'],
    data() {
      return {
        currentNr: "kl2",
        priceList: [{
          "nr": "E100243",
          "brand": "Miles",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 96-/LEXUS RX300 00-03 перед. SemiMetallic",
          "stock": "0",
          "sorder": "0",
          "delivery": "не известно",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "560.21",
          "currency": "руб."
        }, {
          "nr": "E400243",
          "brand": "Miles",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 96-/LEXUS RX300 00-03 перед. LowMetallic",
          "stock": "16",
          "sorder": "0",
          "delivery": "2 дня",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "560.21",
          "currency": "руб."
        }, {
          "nr": "E400243",
          "brand": "Miles",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 96-/LEXUS RX300 00-03 перед. LowMetallic",
          "stock": "1",
          "sorder": "0",
          "delivery": "на складе",
          "minq": "1",
          "upd": "28.06.19 21:56",
          "price": "560.21",
          "currency": "руб."
        }, {
          "nr": "AW1810647",
          "brand": "AYWIPARTS",
          "name": "Колодки тормозные передние LEXUS RX300 (AKE) 01-03, TOYOTA Camry(V20) (15\") 96-99/99-01/Co",
          "stock": "2",
          "sorder": "0",
          "delivery": "на складе",
          "minq": "1",
          "upd": "28.06.19 21:56",
          "price": "656.00",
          "currency": "руб."
        }, {
          "nr": "ADT34290",
          "brand": "BLUE PRINT",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "1",
          "sorder": "0",
          "delivery": "на складе",
          "minq": "1",
          "upd": "28.06.19 21:56",
          "price": "937.76",
          "currency": "руб."
        }, {
          "nr": "ADT34290",
          "brand": "BLUE PRINT",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "1",
          "sorder": "0",
          "delivery": "2 дня",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "937.76",
          "currency": "руб."
        }, {
          "nr": "0 986 424 639",
          "brand": "Bosch",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "2",
          "sorder": "0",
          "delivery": "на складе",
          "minq": "1",
          "upd": "28.06.19 21:56",
          "price": "1086.12",
          "currency": "руб."
        }, {
          "nr": "P 83 040",
          "brand": "Brembo",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "0",
          "sorder": "0",
          "delivery": "не известно",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "1419.00",
          "currency": "руб."
        }, {
          "nr": "BP43451",
          "brand": "Fenox",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "1",
          "sorder": "0",
          "delivery": "2 дня",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "617.00",
          "currency": "руб."
        }, {
          "nr": "6131529",
          "brand": "Girling",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "1",
          "sorder": "0",
          "delivery": "2 дня",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "1457.87",
          "currency": "руб."
        }, {
          "nr": "6132489",
          "brand": "Girling",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "1",
          "sorder": "0",
          "delivery": "2 дня",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "1050.00",
          "currency": "руб."
        }, {
          "nr": "SP1226",
          "brand": "Hi-Q",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "0",
          "sorder": "0",
          "delivery": "не известно",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "860.23",
          "currency": "руб."
        }, {
          "nr": "05P712",
          "brand": "LPR",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "0",
          "sorder": "0",
          "delivery": "не известно",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "739.76",
          "currency": "руб."
        }, {
          "nr": "05P712",
          "brand": "LPR",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "1",
          "sorder": "0",
          "delivery": "на складе",
          "minq": "1",
          "upd": "28.06.19 21:56",
          "price": "739.76",
          "currency": "руб."
        }, {
          "nr": "05P953",
          "brand": "LPR",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "4",
          "sorder": "0",
          "delivery": "2 дня",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "810.00",
          "currency": "руб."
        }, {
          "nr": "PN1401",
          "brand": "NiBK",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "5",
          "sorder": "0",
          "delivery": "2 дня",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "1126.00",
          "currency": "руб."
        }, {
          "nr": "PN1448",
          "brand": "NiBK",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "0",
          "sorder": "0",
          "delivery": "не известно",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "1186.00",
          "currency": "руб."
        }, {
          "nr": "PN1448",
          "brand": "NiBK",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "1",
          "sorder": "0",
          "delivery": "на складе",
          "minq": "1",
          "upd": "28.06.19 21:56",
          "price": "1186.00",
          "currency": "руб."
        }, {
          "nr": "J3602081",
          "brand": "Nipparts",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "1",
          "sorder": "0",
          "delivery": "2 дня",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "694.99",
          "currency": "руб."
        }, {
          "nr": "GDB3152",
          "brand": "TRW",
          "name": "Колодки тормозные TOYOTA CAMRY/PREVIA 2.2-3.0 96-/LEXUS RX300 00-03 передние",
          "stock": "0",
          "sorder": "0",
          "delivery": "не известно",
          "minq": "1",
          "upd": "29.06.19 00:02",
          "price": "1532.00",
          "currency": "руб."
        }]
      }
    },

    created() {
      console.log(this.nr);
      this.currentNr = this.nr;
      this.getPriceByNrFirm(this.nr);
    },

    methods: {
      selectNr(nr) {

        if (nr == undefined)
          this.currentNr = this.priceList[0].nr;
        else
          this.currentNr = nr;

        this.getPriceByNrFirm(this.currentNr);
      },
      getPriceByNrFirm(nr) {

        if (nr == undefined || nr.trim().length == 0)
          return;

        axios.get(`/price_by_nr_firm/${nr}`)
          .then(response => {
            if (response.data.result.status != undefined)
              this.priceList = [];
            else
              this.priceList = response.data.result;
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      },

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

  .price-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .price {
      width: 350px;
      padding:10px;
      border: 1px solid #41b883;
      font-weight: 100;
      font-size: 18px;
      box-sizing: border-box;
      cursor: pointer;
      margin: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      &:hover {
        border: 1px #338d63 solid;
      }

      span {
        width: 100%;
        color: red;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          color: #a41b00;
        }
      }
    }
  }
</style>
