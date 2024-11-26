<template>

 <div class="">
  <div class="lg:block hidden">
    <Desktop />
  </div>
  <div class="lg:hidden block">
    <Mobile />
  </div>

 </div>
</template>

<script setup>
import Mobile from './MobileFaq.vue'
import Desktop from './DesktopFaq.vue'
</script>