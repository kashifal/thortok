<template>
  <div class="mt-8">
    <div class="sm:p-6 p-4">
      <section class="2xl:max-w-7xl py-5 px-6 rounded-xl bg-[#EFF1D9] mx-auto">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          Discover our current offers
        </h2>
        <p class="text-gray-600 mb-6">
          Explore exclusive digital assets from top creators, available for
          purchase now.
        </p>

        <div class="flex justify-between">
          <div class="flex flex-wrap gap-2 mb-8">
            <button class="px-4 rounded-[4px] py-2 bg-gray-800 text-white">All</button>
            <button class="px-4 rounded-[4px] py-2 border bg-gray-800 text-white">
              Special offer
            </button>
            <button class="px-4 rounded-[4px] py-2 border bg-gray-800 text-white">
              Mockups
            </button>
            <button
              class="px-4 py-2 rounded-[4px] border border-[#005B52] bg-white text-black hover:text-white hover:bg-gray-800 duration-300"
            >
              Stationery
            </button>
            <button class="px-4 rounded-[4px] py-2 border bg-gray-800 text-white">
              Presets
            </button>
            <button class="px-4 rounded-[4px] py-2 border bg-gray-800 text-white">
              Themes
            </button>
          </div>

          <div class="gap-2 mt-2 hidden sm:flex">
            <div
              @click="goPrev"
              class="p-2 h-8 rounded-full cursor-pointer bg-white"
            >
              <CarouselLeftArrow />
            </div>
            <div
              @click="goNext"
              class="p-2 h-8 rounded-full cursor-pointer bg-white"
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
            perPage: 4, // Show one slide per view
            pagination: false, // Disable default pagination
            arrows: false, // Disable default arrows (we'll use custom)
          }"
        >
          <SplideSlide
            class="bg-white py-5 px-5 shadow-md rounded-lg overflow-hidden"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/13a7/3da5/2207c3ae056e51dd4e1d43e0c8024e7c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oS6cNLdagAy3EvTmwJaP4qAZt2w-I9ccmlcwzMx4jRPFFXADEe46rX4XDHjbrVc3sdVoLTZLVrtGa0OdRYPMU0L86ch9iCzWeOaVUDtMEWFLr2BOjKCbpRF3ltmHf1TNKvLJZOJnKg8z7Q1EwR6k7i2cPP6nmszdvcqV-EMY2mQo3Oxcu9XpNr-NXKSBslyk9vIF8R1lnRc-aV2znX1XQyC2Nxigwk7T3oJgB8NB~ElprimDOSM5tF4~9rl70M3-lqVHMaL6SJ7qyZZLLsHQy-WGKL7DrLDYF~L0klB2RGoe1o8cXRjlDnbbuisnqGmdS1B7jvT4UUwshTqQgy6F6w__"
              alt="Product Image"
              class="w-full rounded-md h-50 object-cover"
            />
            <div class="p-4">
              <div class="flex justify-between">
                <h3
                  class="font-semibold items-center flex gap-3 text-sm text-gray-800"
                >
                  <span class="flex"
                    ><div class="relative">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/807c/0eb6/d541b89bff8631a874638024a09c19f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKCGJJnAYY27UHhmC7Qn53IYt9NLiQffQjmilEImFYLlXqfGfWHUa435gS9NaMGxR6MiCInQ0fpq81totZAW7h4VOKUA4ZS8f3z7ZprUvMfQ~umddcXsWGu6GhwX03~AKGyrrgno3aovaQVPoafD~t3~yJE1M2xLSQotB6tyLytxSWdZwBdTJUW1eSQn6Tt1vQqx~RvI4HV6uqE1dkcxOY2hm5dNEB7b63NepztVHOhpIcy5Sr5VPgIejElQc9HiAR10BQQllkaknuy-6Ix15ZH-2sRuZ-1xS2Kymkw0tem8Zjdqw1KPYJdw1gVwZQoQnqlVHQth3vaJrSOSQR8Ojw__"
                        class="w-9 rounded-full"
                        alt=""
                      />
                      <span
                        ><h2
                          class="text-[8px] absolute p-1 text-center flex items-center border-2 border-white -top-2 left-7 h-6 bg-yellow-300 font-bold rounded-full"
                        >
                          Pro
                        </h2></span
                      >
                      <span
                        ><h1
                          class="absolute p-1 bg-[#78BF39] border border-white top-7 left-7 rounded-full"
                        ></h1
                      ></span></div
                  ></span>
                  Ch. Ratana
                </h3>
                <div class="flex items-center mb-2 gap-2">
                  <p class="text-black text-[13px] line-through">$30</p>
                  <p class="text-black text-2xl font-bold">$25</p>
                </div>
              </div>
              <h1 class="mt-3 -mb-2 text-xl font-bold">Sala Blue</h1>
              <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
                <button
                  class="bg-black text-white px-3 sm:text-sm text-[11px] shadow-md shadow-[#DBF226] py-2 rounded-md flex gap-1 justify-center items-center"
                >
                  <span>
                    <Cart />
                  </span>
                  Add to cart
                </button>
                <button
                  class="px-2 py-2 bg-white sm:text-sm text-[11px] font-semibold text-gray-800 flex gap-1 justify-center items-center border border-[#00000080] rounded-md"
                >
                  <span>
                    <WhisSave />
                  </span>
                  Wishlist
                </button>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide class="bg-white py-5 px-5 rounded-lg overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/3da4/9708/654dab447ac14e2a190ea98aaaaf5607?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bjtKMuEdqMEmPITqxheSQDBsbLOHt5Mo0FxEYCVxF5SEIkv8B~3gzkXPVEeV35O~P5FRZcj-DI~ZsGoUbScgxdqWa2FAZHaCV-ZuBYkTy6-gsjshPhyNZnBd263yR~hKr2MrB-t4mfZkQOr9T0kWtKS7Qf2jkgpMfUtszrUdukRoGAmLt-g1fT8xWN3YoLNBTzOIRUedBtZQkZ44ApcEbJzNr0gOmXfbgiy~0Ji8qUw1tmweJz1-lYSl5Ku2Zey-RvqOwQW3YTePyOIMvti6TEaoLGRgKlaIOyC6TmUD7W8o2wNrnDZgE7E3i6oQMXi2JVc2WMAFwzdrpzK6yv6hOw__"
              alt="Product Image"
              class="w-full rounded-md h-50 object-cover"
            />
            <div class="p-4">
              <div class="flex justify-between">
                <h3
                  class="font-semibold items-center flex gap-3 text-sm text-gray-800"
                >
                  <span class="flex"
                    ><div class="relative">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/5ccc/df80/219777ad8315a65d20880d40025bd1ac?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ojqXgiwGA8~sXoIyEu590gG7Z0WLTyIseJtt2j0kAQi7J8bNi2Tdd077fTHAUPuPe1M49bdKC67eam-BWDxB3LrWuXubEzdY5GEDJZjUvxkQG5ELEPstPDb~vrGUfwcbByzJeGaffEKygcgerJwm4OI8gi-EDUh-Hnuz-2zuo7ax8wtO1EiGgS4w1oa7UBsKO9TiR2v0FCuROTUPZAirt8oJavt~gIqe0P-rX8ZqALQkeNokF5eoW1--0nNA7HdFzyvJPzU~ZqPDfmhqpCWkWjFRN1UOMZyEPuDrF43-mv7M1W5YUtyyXU-8M2QG6WpBRcHJU2pSd8xvj9Xih-JlFw__"
                        class="w-9 rounded-full"
                        alt=""
                      /></div
                  ></span>
                  K. Net
                </h3>
                <div class="flex items-center mb-2 gap-2">
                  <p class="text-black text-[13px] line-through">$40</p>
                  <p class="text-black text-2xl font-bold">$35</p>
                </div>
              </div>
              <h1 class="mt-3 -mb-2 text-xl font-bold">Organic Orange</h1>
              <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
                <button
                  class="bg-[#DBF226] text-black px-3 sm:text-sm text-[11px] py-2 rounded-md flex gap-1 justify-center items-center"
                >
                  <span>
                    <Cart />
                  </span>
                  Add to cart
                </button>
                <button
                  class="px-2 py-2 bg-white sm:text-sm text-[11px] font-semibold text-gray-800 flex gap-1 justify-center items-center border border-[#00000080] rounded-md"
                >
                  <span>
                    <WhisSave />
                  </span>
                  Wishlist
                </button>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide class="bg-white py-5 px-5 rounded-lg overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/7902/fdc1/d8306f0c995db73be4dc39102a61b942?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NWtYWI1QNz2JscWPU1LXGSoPFSV0Bvtl7gtzBxDNVDfW-hyQckW5~0LVXWUSmsXV~cA0~uqoWPp8jlTDgG1sGbhaLNyK72ei1O1fVC1OXxL8LOaYTXWuL-BLLnaEKcUZodeI3LggZLKG67qJ3pCCUSVhwl0-Ns196wlsf4Cdt9DBhxjaX6PSaikhDRGhxS8tQT1tntQS~3ZYztUNYYhsL3eFu3SkpW55xRZoWw2OIYp71a7yAumCOb8Rz5QgV1Nw4vnyRWin5umqY1VeM4Y6QeW0MBBunKmxolxQMFhswBMIVf2JJl~~SrtLu2DEMRQZJwlVI-PFfx2K8lrx~7NHLg__"
              alt="Product Image"
              class="w-full rounded-md h-44 object-cover"
            />
            <div class="p-4">
              <div class="flex justify-between">
                <h3
                  class="font-semibold items-center flex gap-3 text-sm text-gray-800"
                >
                  <span class="flex"
                    ><div class="relative">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/3ca3/4594/808da96cd62fb323d430518048a0596b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8zQIMGOtt-7uOF579ALJX-eTp-b6hWSCpADmIep0zX8p5nsAyyLGMc6QCFasccZicn084JomNOX9cSxzsiDLvXEYA8WEI0AeR-jj3wxRr6UxvHIIWEqDJszFToiw-troxf9rtl0TDIZhXLXvHLs0LX8tBpxJ3M-BeyD4UhC7zTICgSKFw7NFdqfkfmkiKPA6HCygyKlW8l6msJqQyKG0bAO12sR9KpcFNDEcIZnYFEC06CVfGCSfqRRYDnMJs2JxMfrZfW7ZjG2GdDV2Yhz6eOVJhQm1kB-NHadK0HI6vk3yKkfROAeJPvNj96RGbx53u9aCZR~FfzUjmVtXucIhw__"
                        class="w-9 rounded-full"
                        alt=""
                      /></div
                  ></span>
                  Na. Rith
                </h3>
                <div class="flex items-center mb-2 gap-2">
                  <p class="text-black text-[13px] line-through">$45</p>
                  <p class="text-black text-2xl font-bold">$40</p>
                </div>
              </div>
              <h1 class="mt-3 -mb-2 text-xl font-bold">Geo Art</h1>
              <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
                <button
                  class="bg-[#DBF226] text-black px-3 sm:text-sm text-[11px] py-2 rounded-md flex gap-1 justify-center items-center"
                >
                  <span>
                    <Cart />
                  </span>
                  Add to cart
                </button>
                <button
                  class="px-2 py-2 bg-white sm:text-sm text-[11px] font-semibold text-gray-800 flex gap-1 justify-center items-center border border-[#00000080] rounded-md"
                >
                  <span>
                    <WhisSave />
                  </span>
                  Wishlist
                </button>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide class="bg-white py-5 px-5 rounded-lg overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/3959/47b1/ef73f6d3d30dcf24fad939b984db9177?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fflSJh-yEXLfFH-gDLXSEXEJDaSk5yBitSdcP5MxF1WYZfSoHNz19LSCe1llYBYfN1h1CR7klIDQQuGThlQ~9rWeYGazR76J38xEKrX~IU7wS5UyB1J7FQiefjEoxPSqV~P~PlMSw8jCYT0bdRUo-mH27BYxVttUeRYeGGRXPJ3TmrNHyYpbnEOeV8yyBYWSUoxlODV7ius9p4VK3GFCMQPL3HCd1DhVmxjrCcMBKUN0~bU7EAuRZpaJprvmlYpAiWG9YrDdbDspvPK9jJKbqgY8W10xvbV-TPk-EPvw7oOrgMyrEKxWLyz6O0UV3anyTi7HRT2~B~5N~oMjBykQIQ__"
              alt="Product Image"
              class="w-full rounded-md h-44 object-cover"
            />
            <div class="p-4">
              <div class="flex justify-between">
                <h3
                  class="font-semibold items-center flex gap-3 text-sm text-gray-800"
                >
                  <span class="flex"
                    ><div class="relative">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/1686/0e45/afe7dcf014ded8c355c3e096dc9523ed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OpupSnMiktRirKSlcuCoqZ4Vi1HiMNCA0hFMNC9rE1FsR75p~Nt52zd-MgxvF6jAoFYndHrAXkBxp4EgvFLq9j8VCqnKyPLIbI~kL3bAxwl2HbySAoHlwYY8itK5XoDfvqnL6im7VOuCZcT7W2kiqlKKZO~nxvl~6nWgMmQ4H5X3H57f0gjJa8JPe-qIstBmSk8qkxo4cdfvrtp88TpypE~UxUOulC-lFX6dZbq1eaXpr4gGcWHFcbf73IqZX8673NoLjRI70iNVkR6EohnMHnOHFMbUY~2Mz15fc8XZ-izi75ZJVc6EGKej5sBwCJk8GvTYGS6k44VmVZi~T5ZmQw__"
                        class="w-9 rounded-full"
                        alt=""
                      /></div
                  ></span>
                  L. Sreyka
                </h3>
                <div class="flex items-center mb-2 gap-2">
                  <p class="text-black text-[13px] line-through">$35</p>
                  <p class="text-black text-2xl font-bold">$25</p>
                </div>
              </div>
              <h1 class="mt-3 -mb-2 text-xl font-bold">Passion Crea</h1>
              <div class="mt-4 flex flex-wrap items-center w-full gap-2 -mb-3">
                <button
                  class="bg-[#DBF226] text-black px-3 sm:text-sm text-[11px] py-2 rounded-md flex gap-1 justify-center items-center"
                >
                  <span>
                    <Cart />
                  </span>
                  Add to cart
                </button>
                <button
                  class="px-2 py-2 bg-white sm:text-sm text-[11px] font-semibold text-gray-800 flex gap-1 justify-center items-center border border-[#00000080] rounded-md"
                >
                  <span>
                    <WhisSave />
                  </span>
                  Wishlist
                </button>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </section>
    </div>
  </div>
</template>

<script setup>
import WhisSave from "../icons/WhisSave";
import CarouselLeftArrow from "../icons/CarouselLeftArrow";
import CarouselRightArrow from "../icons/CarouselRightArrow";
import Cart from "../icons/Cart";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css"; 

import { ref } from "vue";

const splideRef = ref(null); // Reference to Splide instance

const goNext = () => {
  const splideInstance = splideRef.value?.splide;
   splideInstance.go(">"); // Move to next slide
};

const goPrev = () => {
  const splideInstance = splideRef.value?.splide;
 splideInstance.go("<"); // Move to previous slide
};
</script>

<style scoped></style>
