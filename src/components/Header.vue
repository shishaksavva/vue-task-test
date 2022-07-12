<script>
export default {
  name: 'Header',
  props: {
    // если мы используем в проекте, то практичнее будет убрать данный параметр и обращаться к переменной из хранилища
    cart: Array,
    // данные параметры не нужны
    required: true,
    default: {},

    // если мы используем в проекте, то практичнее будет убрать данный параметр и обращаться к переменной из хранилища
    currency: String,
  },
  data() {
    return {
    // лучше сделать через хранилище
      cartPrice: 0,
    };
  },
  watch: {
    // если cartPrice сделать как геттер в хранилище, то это не нужно. И ещё тут красивее будет использовать reduce
    cart(cart) {
      let val = 0;
      cart.forEach((item) => {
        val += item.price * item.amount;
      });
      this.cartPrice = val;
    },
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>

// во vue принято шаблоны распологать вверху
<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>
