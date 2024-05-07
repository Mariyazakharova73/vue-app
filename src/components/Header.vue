<script setup>
import { MAIN, FAVORITES, PROFILE } from '../utils/variables'
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <router-link :to="MAIN">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="Logo." class="w-11" />
        <div class="hidden md:block">
          <h2 class="font-bold text-xl uppercase">Vue films</h2>
          <p class="text-slate-400">Здесь лучшие фильмы!</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-4 md:gap-10">
      <li>
        <router-link
          :to="FAVORITES"
          class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black"
        >
          <img src="/heart.svg" alt="Favorite." />
          <span class="hidden sm:block">Закладки</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="PROFILE"
          class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black"
        >
          <img src="/profile.svg" alt="Favorite." />
          <span class="hidden sm:block">Профиль</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>
