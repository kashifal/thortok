<template lang="">
  <div class="bg-[#EFF1D9] my-20 relative smm:px-6 py-20 pl-6">
    <section class="max-w-7xl mx-auto">
      <div class="underline sm:underline-offset-[16px] underline-offset-4">
       
      </div>
      <div class="flex items-end justify-between">
        <div>
          <h2
          class="lg:text-[20px] sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] md:leading-[32px] flex itemsc-enter gap-4 lg:leading-[36px] font-[700]"
        >
          <span class="p-2 bg-[#DBF226] h-fit w-fit rounded-full"> <Featured /> </span
          ><span class="border-b border-black">Featured Creators of the Week</span>
        </h2>
        <p class="lg:text-[17px] pl-14 text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3">
          Discover the unique talents and inspiring creations of this week’s standout contributors.
        </p>
        </div>
        <div class="gap-2 mt-16 w-full flex items-center justify-between   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40   md:hidden">
          <div
            @click="goPrev"
            class="w-8 flex items-center justify-center h-8 rounded-full cursor-pointer bg-white"
          >
            <CarouselLeftArrow />
          </div>
          <div
            @click="goNext"
            class="w-8 flex items-center justify-center h-8   rounded-full cursor-pointer bg-white"
          >
            <CarouselRightArrow />
          </div>
        </div>

        <div class="gap-2 -mt-1 hidden smm:flex">
          <div
            @click="goPrev"
             class="bg-[#FFFFFF] cursor-pointer flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]"
          >
            <CarouselLeftArrow />
          </div>
          <div
            @click="goNext"
             class="bg-[#FFFFFF] cursor-pointer flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]"
          >
            <CarouselRightArrow />
          </div>
        </div>
      </div>

      <Splide
      class="mt-10"
      ref="splideRef"
      :options="{
        type: 'loop',
        gap: '1rem',
        perPage: 6, // Default for screens above 1440px
        pagination: false, // Disable default pagination
        perMove:1,
        arrows: false, // Disable default arrows
        breakpoints: {
          1700: { // Screens under 1440px
            perPage: 4,
          },
          1100: { // Screens under 1100px
            perPage: 2.5,
          },
          768: { // Screens under 768px
            perPage: 2,
          },
          630: { // Screens under 630px
            perPage: 1.5,
          },
          424: { // Screens under 424px
            perPage: 1.2,
          },
        },
      }"
    >
        <SplideSlide
        v-for="(item,i) in [1,2,3,4,5,6,7,8,9]" :key="i"
          class="bg-black text-white p-4 shadow-md rounded-lg overflow-hidden"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/9f38/a05b/f1eb9614d6a01323ef322be0c43a38d0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKxzBrYEMkFe~UjX5e8viJUbgyfwtfIOj-s5giUvZwozosJv0nvPNPr5HIDt5lkq0rd40FfQbl-IMEdCYwG0kWuGhW-VCHpzCQv2dlK25BbzXYB6tPwR2B~Z4nemO0T7g4RerXlOGSMvSFfgybkPwEWMG-vZpDz8l4EMuuYLhFwrgYdosKT0AWIF8HWSLRlK-6YfsDzV9ROUJYJWy3ahJDX0ALkswqhYyo01JVBsPDtEYxUSh28bksWU3ZfDMnBjiAQWYBEmzIIHpi1BDwMcvB0cirfExWbFz3EwhGfqTIHmGSc2wOLETKjDKBv-B~kiOuqQqaNViTjDb33lBu00kA__"
            alt="Product Image"
            class="w-full rounded-t-[5px] sm:h-[201px] h-[189px] lg:h-[192px] object-cover"
          />
          <div class="py-4 mt-2 pr-4">
            <div class="flex justify-between">
              <h3
                class=" items-center flex gap-4 text-[10px] sm:text-[11px] md:text-sm text-white"
              >
                <span class="flex"
                  ><div class="relative">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/807c/0eb6/d541b89bff8631a874638024a09c19f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKCGJJnAYY27UHhmC7Qn53IYt9NLiQffQjmilEImFYLlXqfGfWHUa435gS9NaMGxR6MiCInQ0fpq81totZAW7h4VOKUA4ZS8f3z7ZprUvMfQ~umddcXsWGu6GhwX03~AKGyrrgno3aovaQVPoafD~t3~yJE1M2xLSQotB6tyLytxSWdZwBdTJUW1eSQn6Tt1vQqx~RvI4HV6uqE1dkcxOY2hm5dNEB7b63NepztVHOhpIcy5Sr5VPgIejElQc9HiAR10BQQllkaknuy-6Ix15ZH-2sRuZ-1xS2Kymkw0tem8Zjdqw1KPYJdw1gVwZQoQnqlVHQth3vaJrSOSQR8Ojw__"
                      class="size-[31px] rounded-full"
                      alt=""
                    />
                    <span
                        ><h2
                          class="text-[5px] text-black absolute p-1 text-center flex items-center border-2 border-[#0D0D0D] -top-2 left-6 size-5   justify-center bg-[#DBF226] font-normal rounded-full"
                        >
                          Pro
                        </h2></span
                      >
                    <span
                      ><h1
                        class="absolute size-[8px] flex items-center justify-center bg-[#78BF39] border border-[#0D0D0D] top-[22px] -right-[2px] rounded-full"
                      ></h1
                    ></span></div
                ></span>
              <h1 class="font-[300]">Ch. Ratna</h1>
              </h3>
              <div class="flex items-center -mr-3">
                <button
                  class="flex items-center gap-1 px-[14px] font-medium py-1 rounded-md border-[#FDE047] border text-[#FDE047] hover:bg-[#DBF226] hover:text-black"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <h1 class="mt-7 sm:text-[17px] md:text-[20px] leading-[36px] font-[700]">Sala Blue</h1>
            <div class="mt-2 flex flex-wrap items-center w-full gap-2 -mb-3">
              <button
                class="hover:bg-[#DBF226] font-[300] hover:border-[#DBF226]  bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black sm:px-3 px-[14px] sm:text-[15px] text-[12px] shadow-md py-1 sm:py-[6px] rounded-[4px] flex gap-1 justify-center items-center"
              >
                Graphics
              </button>
              <button
              class="hover:bg-[#DBF226] font-[300] hover:border-[#DBF226]  bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black sm:px-3 px-[14px] sm:text-[15px] text-[12px] shadow-md py-1 sm:py-[6px] rounded-[4px] flex gap-1 justify-center items-center"


              >
                PSD
              </button>
              <button
              class="hover:bg-[#DBF226] font-[300] hover:border-[#DBF226]  bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black sm:px-3 px-[14px] sm:text-[15px] text-[12px] shadow-md py-1 sm:py-[6px] rounded-[4px] flex gap-1 justify-center items-center"


              >
                Templates
              </button>
              <button
              class="hover:bg-[#DBF226] font-[300] hover:border-[#DBF226]  bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black sm:px-3 px-[14px] sm:text-[15px] text-[12px] shadow-md py-1 sm:py-[6px] rounded-[4px] flex gap-1 justify-center items-center"


              >
                Mockups
              </button>
              <button
              class="hover:bg-[#DBF226] font-[300] hover:border-[#DBF226]  bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black sm:px-3 px-[14px] sm:text-[15px] text-[12px] shadow-md py-1 sm:py-[6px] rounded-[4px] flex gap-1 justify-center items-center"


              >
                Marketing
              </button>
            </div>
          </div>
        </SplideSlide>

        
      </Splide>
    </section>
  </div>
</template>
<script setup>
import Featured from "../icons/Featured.vue";
import CarouselRightArrow from "../icons/CarouselRightArrow.vue";
import CarouselLeftArrow from "../icons/CarouselLeftArrow.vue";
import Plus from "../icons/Plus.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ref } from "vue";

const splideRef = ref(null); // Reference to Splide instance

const goNext = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go(">"); // Move to next slide
};

const goPrev = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go("<"); // Move to previous slide
};
</script>
<style lang=""></style>
