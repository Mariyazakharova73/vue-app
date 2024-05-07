<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="bg-white w-5/6 m-auto rounded-xl shadow-xl shadow-grey-200 mt-10">
    <Header />
    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>
