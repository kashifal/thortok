<template lang="html">
  <div class="2xl:max-w-7xl mx-auto px-6 py-16">
    <h1 class="font-[700] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[52px]">
      Quick Answers<br />
      to Your Questions
    </h1>
    <div class="mt-14 md:grid gap-10 grid-cols-12">
      <!-- Sidebar (Mobile Version) -->
      <div class="mt-5 md:hidden flex flex-col gap-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="flex justify-between items-center cursor-pointer py-2.5 px-4 rounded-[6px] text-center text-[13px] sm:text-[18px] font-[400]"
          :class="{
            'bg-[#EFF1D980]': !faq.isOpen, // Light background when not open
            'bg-[#005B52]': faq.isOpen, // Dark background when open
            'text-white': faq.isOpen // White text when open
          }"
          @click="toggleAnswer(index)"
        >
          <span>{{ faq.sidebarText }}</span> <!-- Sidebar text -->
          <span>
            <RightArrow v-if="!faq.isOpen" />
            <DownArrow v-else />
          </span>
        </div>
      </div>

      <!-- Sidebar (Desktop Version) -->
      <div class="md:col-span-2 md:flex hidden flex-col gap-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="cursor-pointer py-2.5 px-6 rounded-[6px] text-center text-[18px] font-[400]"
          :class="{
            'bg-[#EFF1D980]': !faq.isOpen, // Light background when not open
            'bg-[#005B52]': faq.isOpen, // Dark background when open
            'text-white': faq.isOpen // White text when open
          }"
          @click="toggleAnswer(index)"
        >
          {{ faq.sidebarText }} <!-- Sidebar text -->
        </div>
      </div>

      <!-- FAQ Content (Desktop Version) -->
      <div class="md:col-span-10 md:-mt-7">
        <div v-for="(faq, index) in faqs" class="border-b py-7 border-[#e4e4e4]" :key="index">
          <div
            class="flex items-center cursor-pointer justify-between gap-2"
            @click="toggleAnswer(index)"
          >
            <h1 class="font-[700] text-[17px] md:text-[20px] lg:text-[22px]" :class="{'text-[#005B52]': faq.isOpen}">
              {{ faq.question }} <!-- FAQ Question -->
            </h1>
            <Plus v-if="!faq.isOpen" />
            <Minus v-else />
          </div>
          <p v-show="faq.isOpen" class="font-[300] md:text-[14px] md:text-[15px] lg:text-[17px] pt-3 w-[98%]">
            {{ faq.answer }} <!-- FAQ Answer -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Minus from '../icons/Minus.vue'; 
import Plus from '../icons/Plus.vue';
import RightArrow from '../icons/RightArrow.vue';
import DownArrow from '../icons/DownArrow.vue';

// Initialize FAQs with different sidebar text and corresponding FAQ questions
const faqs = ref([
  {
    sidebarText: 'About Thortok',  // Sidebar text
    question: 'What is Thortok and what services does it offer?',  // FAQ Question
    answer: 'Thortok is a digital platform that provides tools for creators...', 
    isOpen: true,
  },
  {
    sidebarText: 'Monetization Programs',  // Sidebar text
    question: 'How can creators earn from Thortok?',  // FAQ Question
    answer: 'Thortok provides various monetization programs that help creators earn income...', 
    isOpen: false,
  },
  {
    sidebarText: 'Participation and Content Creation',  // Sidebar text
    question: 'Who can join Thortok and start creating content?',  // FAQ Question
    answer: 'Anyone can join Thortok as a creator and start sharing their content...', 
    isOpen: false,
  },
  {
    sidebarText: 'Account and Settings',  // Sidebar text
    question: 'How do I manage my account and settings?',  // FAQ Question
    answer: 'You can access and modify your account settings through the user dashboard...', 
    isOpen: false,
  },
  {
    sidebarText: 'Support and Reporting',  // Sidebar text
    question: 'How can I contact support for issues or reports?',  // FAQ Question
    answer: 'For support, you can reach out through our help center or via email...', 
    isOpen: false,
  },
]);

// Toggle the visibility of the FAQ answer (used for expanding/collapsing)
const toggleAnswer = (index) => {
  faqs.value.forEach((faq, i) => {
    if (i !== index) {
      faq.isOpen = false;
    }
  });
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<style scoped>
.font-[300] {
  font-weight: 300;
}

.bg-[#EFF1D980] {
  background-color: rgba(239, 241, 217, 0.6);
}

.text-[#005B52] {
  color: #005B52; /* Color for opened state */
}

.bg-transparent {
  background-color: transparent;
}

.md:col-span-10 {
  margin-top: 0 !important;
}
</style>
