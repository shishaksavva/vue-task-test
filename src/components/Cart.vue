<template>
  <div class="cart-list">
    <!-- аттрибут key очень важен когда переодически происходит перерендер списка -->
    <div v-for="item in spisok_dlya_rendera">
      <!-- item - является объектом поэтому он просто будет выводить [object Object], необходимо расписать по полям -->
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    // 1 в js принята camelCase; 2 в программировании не принята транслитерация
      spisok_dlya_rendera() {
          return this.cart.reverse();
      },
  },
};
</script>

// нету стилей для класса cart-list
<style>

</style>
