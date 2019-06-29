<template>
  <div>
    <div class="product-list">
      <a v-for="product in productList" class="product">

        <p>Название автозапчасти: <span>{{product.name}}</span></p>
        <p>Дата, время на которое актуальны данные: <span>{{product.upd}}</span></p>
        <p><span>{{product.price}} {{product.currency}}</span></p>
        <p>Кол-во позиций на складе: <span>{{product.stock}} </span></p>
        <p>Кол-во позиций доступных под заказ: <span>{{product.sorder}}</span> </p>
        <p>Средний срок поставки: <span>{{product.delivery}}</span> </p>
        <p>Минимальное кол-во для заказа: <span>{{product.minq}}</span> </p>

      </a>
    </div>
  </div>

</template>
<script>

  import axios from 'axios';


  export default {
    props: ['key'],
    data() {
      return {
        productList: []
      }
    },

    created() {
      this.getProduct(this.key);
    },

    methods: {

      getProduct(key) {

        if (key == undefined || key.trim().length == 0)
          return;

        axios.get(`/g_info/${key}`)
          .then(response => {
            if (response.data.result.status != undefined)
              this.productList = [];
            else
              this.productList = response.data.result;
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

  .product-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .product {
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
