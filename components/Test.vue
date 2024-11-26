<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { ref } from 'vue';

const splideRef = ref(null); // Reference to Splide instance

// Array of slides
const slides = [
  { image: 'https://via.placeholder.com/800x400?text=Slide+1' },
  { image: 'https://via.placeholder.com/800x400?text=Slide+3' },
  { image: 'https://via.placeholder.com/800x400?text=Slide+3' },
];

// Custom arrow navigation methods
const goNext = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go('>'); // Move to next slide
};

const goPrev = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go('<'); // Move to previous slide
};
</script>

<template>
  <div>
    <!-- Custom Navigation Arrows -->
    <div class="custom-arrows">
      <button @click="goPrev" class="custom-arrow prev">⬅ Prev</button>
      <button @click="goNext" class="custom-arrow next">Next ➡</button>
    </div>

    <!-- Splide Carousel -->
    <Splide
      ref="splideRef"
      :options="{
        type: 'loop',
        perPage: 1,    
        drag:false,    // Show one slide per view
        pagination: false, // Disable default pagination
        arrows: false      // Disable default arrows (we'll use custom)
      }"
    >
      <SplideSlide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="`Slide ${index + 1}`" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<style>
/* Custom Arrows Styling */
.custom-arrows {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.custom-arrow {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;

}

.custom-arrow:hover {
  background-color: #0056b3;
}

/* Carousel Styling */
img {
  width: 100%;
  height: auto;
  
}
</style>
