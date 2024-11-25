<template>
  <div>
    <div class="2xl:max-w-7xl overflow-hidden w-full mx-auto pt-14 px-6">
      <!-- Header Section -->
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <div class="flex items-center gap-2">
          <SeasonalCollection />
          <p class="text-[17px] font-[700]">Discover Seasonal Collections</p>
        </div>
        <div class="flex items-center gap-2">
          <!-- Left Arrow -->
          <div
            class="bg-[#EFF1D9] cursor-pointer flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]"
            @click="goToPrevSlide"
          >
            <CarouselLeftArrow />
          </div>
          <!-- Right Arrow -->
          <div
            class="bg-[#EFF1D9] cursor-pointer flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]"
            @click="goToNextSlide"
          >
            <CarouselRightArrow />
          </div>
        </div>
      </div>

      <!-- Swiper Section -->
      <swiper
        ref="swiperInstance"
        :space-between="15"
        :loop="true"
        :breakpoints="{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          0: { slidesPerView: 2 }
        }"
        class="mySwiper mt-10"
        @swiper="onSwiperInit"
      >
        <!-- Slides -->
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="min-h-[65px] h-full w-[121px] sm:w-[134px] lg:w-[185px] xl:w-[273px] bg-cover text-sm font-[700] bg-center overflow-hidden text-white rounded-[6px] flex items-center justify-center relative"
          :style="{ backgroundImage: `url(${slide.img})` }"
        >
          <div class="bg-[#00000099] z-[2] w-full h-full absolute top-0 left-0"></div>
          <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full cursor-context-menu z-[4]">
            {{ slide.label }}
          </p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

import { ref, onMounted } from 'vue';
import SeasonalCollection from '../icons/SeaseonalCollection';
import CarouselLeftArrow from '../icons/CarouselLeftArrow';
import CarouselRightArrow from '../icons/CarouselRightArrow';

// Swiper instance reference
const swiperInstance = ref(null);

// Slide data
const slides = [
  { img: '/img/img1.png', label: 'January 1' },
  { img: '/img/img2.png', label: 'January 7' },
  { img: '/img/img3.png', label: 'January 5' },
  { img: '/img/img4.png', label: 'January 13' },
  { img: '/img/hero_image.png', label: 'January 15' },
  { img: '/img/img1.png', label: 'January 1' },
  { img: '/img/img2.png', label: 'January 7' },
  { img: '/img/img3.png', label: 'January 5' },
  { img: '/img/img4.png', label: 'January 13' },
  { img: '/img/hero_image.png', label: 'January 15' },
];

// Navigation functions
const goToPrevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.swiper.slidePrev();
  }
};

const goToNextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.swiper.slideNext();
  }
};

// Ensure Swiper is initialized correctly
const onSwiperInit = (swiper) => {
  // Assign the swiper instance when it is initialized
  swiperInstance.value = swiper;
  console.log('Swiper initialized:', swiperInstance.value);
};

// Ensure Swiper is initialized and log it
onMounted(() => {
  if (swiperInstance.value) {
    console.log('Swiper is initialized:', swiperInstance.value);
  } else {
    console.error('Swiper instance is not initialized.');
  }
});
</script>

<style scoped>
.mySwiper {
  display: flex;
  gap: 15px;
}
</style>
