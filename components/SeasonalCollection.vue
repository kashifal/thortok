<template>
    <div>
        <div class="2xl:max-w-7xl overflow-hidden w-full mx-auto pt-14 px-6">
            <div class="flex items-center justify-between gap-2 flex-wrap">
                <div class="flex items-center gap-2">
                  <SeasonalCollection />
                    <p class="text-[17px] font-[700]">Discover Seasonal Collections</p>
                </div>
                <div class="flex items-center gap-2">
                    <div
                        class="bg-[#EFF1D9] cursor-pointer flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]">
                       <CarouselLeftArrow />
    
                    </div>
                    <div
                        class="bg-[#EFF1D9] cursor-pointer flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]">
                       <CarouselRightArrow />
    
                    </div>
                </div>
            </div>
            <div class="mt-10 gap-3 flex items-center h-fit overflow-auto w-fit">
                <div
                    class="min-h-[65px] w-[121px] sm:w-[134px] lg:w-[185px] xl:w-[273px] bg-[url('/public/img/img1.png')] bg-cover text-sm font-[700] bg-center overflow-hidden text-white rounded-[6px] flex items-center justify-center relative">
                    <div class="bg-[#00000099] z-[2] w-full h-full absolute top-0 left-0"></div>
                    <p class="relative cursor-context-menu z-[4]">
                        January 1
                    </p>
                </div>
                <div
                    class="min-h-[65px] w-[121px] sm:w-[134px] lg:w-[185px] xl:w-[273px] bg-[url('/public/img/img2.png')] bg-cover text-sm font-[700] bg-center overflow-hidden text-white rounded-[6px] flex items-center justify-center relative">
                    <div class="bg-[#00000099] z-[2] w-full h-full absolute top-0 left-0"></div>
                    <p class="relative cursor-context-menu z-[4]">
                        January 7
                    </p>
                </div>
                <div
                    class="min-h-[65px] w-[121px] sm:w-[134px] lg:w-[185px] xl:w-[273px] bg-[url('/public/img/img3.png')] bg-cover text-sm font-[700] bg-center overflow-hidden text-white rounded-[6px] flex items-center justify-center relative">
                    <div class="bg-[#00000099] z-[2] w-full h-full absolute top-0 left-0"></div>
                    <p class="relative cursor-context-menu z-[4]">
                        January 5
                    </p>
                </div>
                <div
                    class="min-h-[65px] w-[121px] sm:w-[134px] lg:w-[185px] xl:w-[273px] bg-[url('/public/img/img4.png')] bg-cover text-sm font-[700] bg-center overflow-hidden text-white rounded-[6px] flex items-center justify-center relative">
                    <div class="bg-[#00000099] z-[2] w-full h-full absolute top-0 left-0"></div>
                    <p class="relative cursor-context-menu z-[4]">
                        January 13
                    </p>
                </div>
                <div
                    class="min-h-[65px] w-[121px] sm:w-[134px] lg:w-[185px] xl:w-[273px] bg-[url('/public/img/hero_image.png')] bg-cover text-sm font-[700] bg-center overflow-hidden text-white rounded-[6px] flex items-center justify-center relative">
                    <div class="bg-[#00000099] z-[2] w-full h-full absolute top-0 left-0"></div>
                    <p class="relative cursor-context-menu z-[4]">
                        January 15
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SeasonalCollection from '../icons/SeaseonalCollection'
import CarouselLeftArrow from '../icons/CarouselLeftArrow'
import CarouselRightArrow from '../icons/CarouselRightArrow'
</script>

<style lang="scss" scoped>

</style>