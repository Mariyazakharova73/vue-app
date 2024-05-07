<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { BASE_URL } from '../utils/variables'

const favorites = ref([])

const fetchFavorites = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/favorites`)

    favorites.value = data
    console.log(favorites)
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  await fetchFavorites()
})
</script>

<template>
  <div>favorites</div>
</template>
