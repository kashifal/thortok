<template>
  <div>
    <header
      class="bg-[url('/public/img/hero_image.png')] md:py-0 py-10 sm:py-20 text-white px-6 flex items-center w-full sm:min-h-[436px] bg-center relative bg-cover">
      <div class="bg-[#00000080] z-[2] absolute top-0 left-0 h-full w-full"></div>
      <div class="2xl:max-w-7xl w-full relative z-[4] mx-auto">
        <h1 class="font-[700] text-[22px] leading-relaxed space-y-2 sm:text-[26px] md:text-[30px] lg:text-[52px] ">Discover, Download,<br />Create!</h1>
        <div class="relative py-4">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search for anything, try with 'Lifestyle'..." 
            class="bg-[#F2F2F2] placeholder:text-[#78787899] text-[13px] font-[350] outline-none h-[38px] sm:h-[60px] pl-12 sm:pl-20 md:pl-44 pr-20 sm:pr-36 text-black w-full rounded-[6px]">

          <!-- Collection Icon with Dropdown -->
          <div 
            class="flex absolute top-1/2 -translate-y-1/2 left-1.5 sm:left-3 items-center cursor-pointer border-r pr-1.5 sm:pr-5 border-[#00000080] gap-1 sm:gap-2"
            @click="toggleDropdown">
            <Collection />
            <h3 class="text-[14px] md:flex hidden text-black font-[350]">
              All Collections
            </h3>
            <span class="text-black"> 
              <Arrow />
            </span>
          </div>

          <!-- Dropdown Menu -->
          <div 
            v-if="isDropdownOpen"
            class="absolute left-28 transform -translate-x-1/2 bg-white shadow-lg rounded-[6px] mt-2 w-full sm:w-[220px]">
            <ul class="text-black">
              <li class="px-4 py-2 hover:bg-[#f1f1f1]">Collection 1</li>
              <li class="px-4 py-2 hover:bg-[#f1f1f1]">Collection 2</li>
              <li class="px-4 py-2 hover:bg-[#f1f1f1]">Collection 3</li>
            </ul>
          </div>

          <!-- Cross Icon and Search Button -->
          <div class="flex items-center gap-3 sm:gap-6 absolute top-1/2 -translate-y-1/2 right-1.5 sm:right-3">
            <!-- Cross Icon -->
            <Cross v-if="searchQuery.length > 0" @click="clearSearch" />
            <button
              class="bg-[#005B52] hover:bg-opacity-90 py-2 px-2.5 sm:px-[14px] rounded-[4px] text-[13px] text-white font-medium">
              <span class="sm:hidden block">
              <Search />
              </span>
              <p class="sm:flex hidden">Search</p>
            </button>
          </div>
        </div>
        <div class="flex gap-1  lg:hidden flex-wrap lg:flex-row flex-col text-white lg:items-center text-sm font-[350]">
          <p class="leading-loose">
            Unleash your creativity with thousands of high-quality
            <button class="bg-[#FFFFFF33] h-fit inline md:mt-0 mt-2 md:mr-0 px-2.5 rounded-[5px]">design assets,</button>
            <span class="inline ml-1 md:ml-0">audio, photos, Videos and templates.</span>
          </p>
          <div class="flex flex-wrap items-center gap-1">
            <p class="inline leading-loose">Whether you’re a creator or a designer, find everything you need to bring</p>
            <button class="bg-[#FFFFFF33] h-fit w-fit inline py-1 px-2.5 rounded-[5px]">your ideas to life.</button>
          </div>
        </div>
        <div class="lg:flex hidden leading-snug gap-1 flex-wrap lg:flex-row flex-col text-white lg:items-center text-sm font-[350]">
          <p class="">
            Unleash your creativity with thousands of high-quality
            <button class="bg-[#FFFFFF33] inline py-1 px-2.5 rounded-[5px]">design assets,</button>
            <span class="inline ml-1">audio, photos, Videos and templates.</span>
            <span class="inline">Whether you’re a creator or a designer, find everything you need to bring</span>
          </p>
          <div class="flex flex-wrap items-center gap-1">
            <button class="bg-[#FFFFFF33] whitespace-nowrap w-fit inline py-1 px-2.5 rounded-[5px]">your ideas to life.</button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Search from '../icons/Search.vue'
import Collection from '../icons/Collection.vue'
import Cross from '../icons/Cross.vue'
import Arrow from '../icons/DownArrow.vue'

// Search Query state
const searchQuery = ref('')

// Dropdown state
const isDropdownOpen = ref(false)

// Toggle dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Clear the search input
const clearSearch = () => {
  searchQuery.value = ''
}
</script>


