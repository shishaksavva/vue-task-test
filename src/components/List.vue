<template>
  <div class="product-list">
    <div class="card" v-for="product in products" :key="product.id">
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id">
        <span>кг</span>
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return { 
      products: [],
    };
  },
  computed: {
    currency() {
      return this.$store.getters.currency;
    },
  },
  methods: {
    ...mapMutations({
      addToCartStore: "addToCart"
    }),
    async getList () { this.products = await this.$store.dispatch('getProductsList'); },
    addToCart(product) {
      this.addToCartStore({product, amount: +this.$refs.amount.find((input) => input.id === product.id).value});
    },
  },
  created() {
    this.getList();
    setInterval(this.getList, 2000); 
  },
};
</script>

<style>
  .product-list {
    padding: 10px calc(50% - 300px);
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  @media (max-width: 420px) {
    .product-list {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 840px) {
    .product-list {
      grid-template-columns: 1fr 1fr;
    }
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
