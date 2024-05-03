<script setup>
defineProps({ nameRU: String, rating: Number, year: String })
</script>

<template>
  <div class="film">
    <p>Название фильма: {{ nameRU }}</p>
    <p>Рейтинг: {{ rating }}</p>
    <p>Год: {{ year }}</p>
    <button>Добавить в избранное</button>
  </div>
</template>

<style scoped>
.film {
  border: 1px solid red;
  padding: 10px;
  max-width: 300px;
}
</style>
