<script setup>
import axios from 'axios'
import { onMounted, ref, watch, reactive } from 'vue'
import CardList from '../components/CardList.vue'
import { BASE_URL } from '../utils/variables'

const items = ref([])

const filters = reactive({
  sortBy: 'nameRU',
  searchQuery: ''
})

const onChangeSelect = (e) => {
  console.log(e.target.value)
  filters.sortBy = e.target.value
}

const onChangeSearchInput = (e) => {
  console.log(e.target.value)
  filters.searchQuery = e.target.value
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`${BASE_URL}/favorites`)
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)
      if (!favorite) {
        return item
      }
      return {
        ...item,
        isLiked: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isLiked) {
      const obj = {
        item_id: item.id
      }

      const { data } = await axios.post(`${BASE_URL}/favorites`, obj)
      item.isLiked = true
      item.favoriteId = data.id

      console.log(data)
      console.log(item)
    } else {
      await axios.delete(`${BASE_URL}/favorites/${item.favoriteId}`)
      item.isLiked = false
      item.favoriteId = null
    }
  } catch (e) {
    console.log(e)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.nameRU = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`${BASE_URL}/items`, { params })

    items.value = data.map((obj) => ({
      ...obj,
      isLiked: false
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})
watch(filters, fetchItems)
</script>

<template>
  <div class="flex flex-wrap gap-4 justify-between items-center mb-10">
    <h1 class="text-3xl font-bold">Все фильмы</h1>
    <div class="flex flex-wrap items-center gap-4">
      <select
        class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
        @change="onChangeSelect"
      >
        <option value="nameRU">По названию</option>
        <option value="-rating">По рейтингу (высокий)</option>
        <option value="rating">По рейтингу (низкий)</option>
      </select>
      <div class="relative">
        <input
          @input="onChangeSearchInput"
          type="text"
          class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
          placeholder="Поиск..."
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src="/search.svg" />
        </div>
      </div>
    </div>
  </div>
  <CardList :items="items" @add-to-favorite="addToFavorite" />
</template>
