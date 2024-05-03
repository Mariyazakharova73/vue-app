<script setup>
import Card from './Card.vue'
defineProps({
  items: Array
})
const onClickLike = () => {
  console.log('test')
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
    <Card
      nameRU="Без обратного пути"
      year="2010"
      imgUrl="https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      country="Великобритания"
      rating="8,1"
      :isLiked="true"
      :onClickLike="onClickLike"
    />
    <Card
      nameRU="Без обратного пути"
      year="2010"
      imgUrl="https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      country="Великобритания"
      rating="8,1"
    /><Card
      nameRU="Без обратного пути"
      year="2010"
      imgUrl="https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      country="Великобритания"
      rating="8,1"
    /><Card
      nameRU="Без обратного пути"
      year="2010"
      imgUrl="https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      country="Великобритания"
      rating="8,1"
    /><Card
      nameRU="Без обратного пути"
      year="2010"
      imgUrl="https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      country="Великобритания"
      rating="8,1"
    />
  </div>
</template>
