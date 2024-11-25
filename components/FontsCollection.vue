<template lang="">
   <div class="py-14 px-6">
        <div class="flex items-center 2xl:max-w-7xl w-full mx-auto  justify-between gap-2 flex-wrap">
            <div class=" items-center gap-2">
                <p class="text-[17px] font-[700]">Fonts collection</p>
                <p class="lg:text-[17px] text-[15px] font-[300] pt-3">Find the perfect fonts to give your designs a
                    unique and professional touch.</p>
                <div class="flex flex-wrap mt-4 w-full gap-2">
                    <button
                        class="bg-[#F5F5F5] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-medium">Serif</button>
                    <button
                        class="bg-[#F5F5F5] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-medium">Sans-Serif</button>
                    <button
                        class="bg-[#F5F5F5] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-medium">Salb-Serif</button>
                    <button
                        class="bg-[#F5F5F5] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-medium">Display</button>
                    <button
                        class="bg-[#DBF226] border border-[#EEEEEE] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-medium">Script</button>
                    <button
                        class="bg-[#F5F5F5] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-medium">Monospaced-width</button>
                    <button
                        class="bg-[#F5F5F5] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-medium">Variable</button>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <div
                    class="bg-[#EFF1D9] flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]">
      <CarouselLeftArrow />

                </div>
                <div
                    class="bg-[#EFF1D9] flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]">
                          <CarouselRightArrow />


                </div>
            </div>
        </div>
        <div class="flex items-center overflow-auto mt-10 whitespace-nowrap gap-5">
            <img src="../public/img/smallCards1.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards2.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards3.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards4.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards5.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards6.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover  lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards7.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards8.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards9.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
            <img src="../public/img/smallCards10.png" alt=""
                class=" w-[122px] sm:w-[137px] md:w-[164px] h-[141px] lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]">
        </div>
    </div>
</template>
<script setup>
import CarouselRightArrow from '../icons/CarouselRightArrow.vue'
import CarouselLeftArrow from '../icons/CarouselLeftArrow.vue'
</script>
<style lang="">
    
</style>