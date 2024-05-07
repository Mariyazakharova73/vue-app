<script setup>
import Card from './Card.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['addToFavorite'])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4" v-auto-animate>
    <Card
      v-for="item in items"
      :key="item.id"
      :nameRU="item.nameRU"
      :year="item.year"
      :imgUrl="item.imgUrl"
      :country="item.country"
      :rating="item.rating"
      :isLiked="item.isLiked"
      :id="item.id"
      :onClickFavorite="() => emit('addToFavorite', item)"
    />
  </div>
</template>
