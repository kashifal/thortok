<template lang="">
  
<div class="">
  <div class="max-w-7xl mx-auto p-6">
    
    <div class="text-start mb-6">
      <h1 class="text-3xl font-bold mb-5 text-gray-800">Choose the Plan That Fits Your Needs</h1>
      <p class="text-gray-600 mt-2">
        Whether you're starting for free or ready to unlock all features, we have a plan for you.
      </p>
    </div>

   
    <div class="grid 2xl:grid-cols-2 gap-8">
      
      <div class="border  shadow-[0_10px_6px_0px_#0000001F] rounded-lg md:flex 2xl:flex-col bg-white gap-8 py-8 px-6">
        <div>
        <h2 class="text-xl font-bold text-gray-800">Free Plan</h2>
        <p class="text-gray-600 mt-2">
          Join Thtork today with our free plan and enjoy access to a curated selection of design assets, templates, and photos.
        </p>
        <button class="mt-6 rounded-[4px] bg-[#DBF226] text-black py-4 w-full px-4  font-medium hover:bg-yellow-500">
          Get Started for Free!
        </button>
        </div>
        <div>
        <ul class="mt-6 space-y-4 text-gray-700">
          <li class="flex items-center gap-2">
          <Tick />
            10 items downloaded per day
          </li>
          <li class="flex items-center gap-2">
                    <Tick />
            Create and save to a favorites list
          </li>
          <li class="flex items-center gap-2">
                               <Tick />
            Consult download history with licenses
          </li>
          <li class="flex items-center gap-2">
                              <Tick />

            Follow talent on the platform
          </li>
          <li class="flex items-center gap-2">
                               <Tick />

            Earn money with the affiliate program
          </li>
        </ul>
        <p class="mt-6 text-sm text-[#005B52] font-medium">
          Sign up and take advantage of all these benefits to boost your creativity!
        </p>
      </div>
      </div>

      
      <div class="border shadow-[0_10px_6px_0px_#0000001F] mb-10 rounded-lg md:flex-col gap-8 bg-white  py-8 px-6">
        <div class="md:flex gap-8 ">
          <div class="md:w-1/2">
        <h2 class="text-xl font-bold text-gray-800">Pro Plan</h2>
        <p class="text-gray-600 mt-2">
          Take your projects to the next level with Thtork's Pro Plan. Get unlimited downloads, access to premium design assets, exclusive templates, and priority support. Unlock all the tools you need to bring your creative ideas to life.
        </p>
        </div>
        <div class=""></div>
        <ul class="mt-6 space-y-4 text-gray-700">
          <li class="flex items-center gap-2">
                               <Tick />

            Unlimited downloads
          </li>
          <li class="flex items-center gap-2">
                               <Tick />

            Priority access to support
          </li>
          <li class="flex items-center gap-2">
                               <Tick />

            Commercial license included
          </li>
        </ul>
        </div>
        <div class="">
          <div class=" md:grid grid-cols-2 max-w-4xl mx-auto  w-full  justify-center mt-3 gap-10">
        <div class="mt-6">
          <h1 class="font-[400] text-[18px] text-[#4C4C4C] text-center">Monthly Plan</h1>
          <div class="flex items-center space-x-4 mx-auto justify-center mt-6 text-center">
            <span class="text-gray-700 text-lg font-medium">USD</span>
            <span class="text-4xl font-bold text-gray-800">2.99</span>
            <span class="text-gray-500 text-sm">/month</span>
          </div>
           <button class="bg-black hover:shadow-[0px_4px_16px_0px_#DBF226] rounded-[4px] mt-4 text-white py-[16px] px-4  font-medium hover:bg-opacity-90 w-full">
            Get monthly
          </button>
        </div>
        <div class="mt-6">
          <h1 class="font-[400] text-[18px] text-[#4C4C4C] text-center">Yearly Plan</h1>
          <div class="flex items-center space-x-4 mx-auto justify-center mt-6 text-center">
            <span class="text-gray-700 text-lg font-medium">USD</span>
            <span class="text-4xl font-bold text-gray-800">35.88</span>
            <span class="text-gray-500 text-sm">/year</span>
          </div>
           <button class="bg-black hover:shadow-[0px_4px_16px_0px_#DBF226] rounded-[4px] mt-4 text-white py-[16px] px-4  font-medium hover:bg-opacity-90 w-full">
            Get Year
          </button>
        </div>
       
        </div>
        
        <div class="mt-6 md:flex md:items-center md:justify-center gap-1">
          <p class="text-sm text-gray-500">Payment Methods:</p>
          <div class="flex space-x-4 mt-2">
            <img src="https://th.bing.com/th/id/OIP.xL03XjjZ7shCuc0VYH4jOwHaCR?rs=1&pid=ImgDetMain" alt="Visa" class="h-6">
            <img src="https://thumbs.dreamstime.com/b/mastercard-logo-mastercard-logo-white-background-vector-format-avaliable-127602378.jpg" alt="MasterCard" class="h-6">
            <img src="https://i.pinimg.com/736x/78/d9/7b/78d97b98b252e371f0a9ac04102766a3.jpg" alt="PayPal" class="h-6">
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>
<script setup>
import Tick from '../icons/Tick.vue'

</script>
<style lang="">
    
</style>