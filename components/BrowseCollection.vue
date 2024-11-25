<template lang="html">
  <div class="2xl:max-w-7xl overflow-auto w-full mx-auto py-14 px-6">
    <h1 class="py-1 border-b border-black md:text-[18px] lg:text-[20px] font-[700] w-fit">Browse by collections</h1>
    <p class="lg:text-[17px] text-[15px] font-[300] pt-3">Discover endless possibilities with our curated digital
      resources, perfect for all your creative needs.</p>
    <div class="sm:grid flex w-fit whitespace-nowrap overflow-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-10">
      <div v-for="(card, index) in cards" :key="index" class="flex group w-[257px] sm:w-auto flex-col gap-4">
        <div class="group-hover: relative rounded-[10px] h-fit w-fit overflow-hidden">
          <img :src="card.image" class="group-hover:scale-[0.98] transition-all duration-500 w-full" alt="">
          <div class="w-full h-full transition-all duration-300 group-hover:bg-black/30 absolute top-0 left-0"></div>
        </div>
        <h1 class="lg:text-[20px] text-[18px] font-[700]">{{ card.title }}</h1>
        <div class="flex flex-wrap w-full gap-2">
          <button v-for="(btn, idx) in card.buttons" :key="idx" 
            class="bg-[#F5F5F5] hover:bg-[#DBF226] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-medium">
            {{ btn }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Graphics',
          image: '/img/imgsCard1.png',
          buttons: ['Icons', 'PSD', 'Vectors', 'Templates', 'Mockups']
        },
        {
          title: 'Photos',
          image: '/img/imgsCard2.png',
          buttons: ['Culture & Tradition', 'Products', 'Food & Beverages', 'Peoples', 'Animals', 'Lifestyle', 'Nature & Place']
        },
        {
          title: 'Videos',
          image: '/img/imgsCard3.png',
          buttons: ['Culture & Tradition', 'Products', 'Food & Beverages', 'Peoples', 'Animals', 'Lifestyle', 'Nature & Place']
        },
        {
          title: 'Audio',
          image: '/img/imgsCard4.png',
          buttons: ['Genres', 'Moods', 'Themes']
        },
        {
          title: 'Sound Effects',
          image: '/img/imgsCard5.png',
          buttons: ['Genres', 'Moods', 'Themes']
        },
        {
          title: '3D Elements',
          image: '/img/imgsCard6.png',
          buttons: ['Culture & Tradition', 'Products', 'Food & Beverages', 'Peoples', 'Animals', 'Lifestyle', 'Nature & Place']
        }
      ]
    }
  }
}
</script>
