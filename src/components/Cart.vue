<template>
  <div :class="getClass">
    <div class="cart-label">Корзина</div>
    <button @click="open=!open">{{!open? "Открыть" : "Закрыть"}}</button>
    <div v-for="item in list" :key="item.id">
      {{ item.title }} - {{item.amount}}кг ({{(item.price * item.amount) + currency}}) 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  computed: {
      list() { 
          return this.$store.getters.cart.reverse();
      },
      currency() {
        return this.$store.getters.currency;
      },
      getClass() { return "cart-list" + (this.open? " cart-list-open" : "")}
  },
};
</script>

<style>
.cart-list {
  position: fixed;
  top: 0;
  right: -200px;
  width: 300px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
}

.cart-list-open {
  right: 0;
}

.cart-label {
  font-size: 12px;
}
</style>
