<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { BASE_URL } from '../utils/variables'
import CardList from '../components/CardList.vue'

const favorites = ref([])

const fetchFavorites = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/favorites?_relations=items`)

    favorites.value = data.map((obj) => obj.item)
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
  <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>
  <CardList :items="favorites" is-favorites/>
</template>
