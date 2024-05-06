<script setup>
import { ref } from 'vue'

defineProps({
  nameRU: String,
  imgUrl: String,
  year: String,
  country: String,
  rating: String,
  isLiked: Boolean,
  onClickLike: Function
})
</script>

<template>
  <div
    class="relative flex flex-col border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2 gap-2"
  >
    <div @click="onClickLike" class="absolute top-3 left-3">
      <img :src="isLiked ? '/like-2.svg' : '/like-1.svg'" alt="Favorite" />
    </div>
    <p class="text-violet-700 absolute top-3 right-3 font-bold">{{ rating }}</p>
    <div class="flex justify-center">
      <img :src="imgUrl" class="object-cover w-96 max-h-44 rounded-lg" alt="Фильм." />
    </div>
    <p class="font-bold">{{ nameRU }}</p>
    <p class="text-slate-400">{{ year }}, {{ country }}</p>
  </div>
</template>
