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
            'bg-[#EFF1D980]': selectedSidebarIndex !== index,
            'bg-[#005B52]': selectedSidebarIndex === index,
            'text-white': selectedSidebarIndex === index
          }"
          @click="selectSidebar(index)"
        >
          <span>{{ faq.sidebarText }}</span>
          <span>
            <RightArrow v-if="selectedSidebarIndex !== index" />
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
            'bg-[#EFF1D980]': selectedSidebarIndex !== index,
            'bg-[#005B52]': selectedSidebarIndex === index,
            'text-white': selectedSidebarIndex === index
          }"
          @click="selectSidebar(index)"
        >
          {{ faq.sidebarText }}
        </div>
      </div>

      <!-- FAQ Content (Desktop Version) -->
      <div class="md:col-span-10 md:-mt-7">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b py-7 border-[#e4e4e4]">
          <div
            class="flex items-center cursor-pointer justify-between gap-2"
            @click="toggleAnswer(index)"
          >
            <h1 class="font-[700] text-[17px] md:text-[20px] lg:text-[22px]" :class="{'text-[#005B52]': faq.isOpen}">
              {{ faq.question }}
            </h1>
            <Plus v-if="!faq.isOpen" />
            <Minus v-else />
          </div>
          <p v-show="faq.isOpen" class="font-[300] md:text-[14px] md:text-[15px] lg:text-[17px] pt-3 w-[98%]">
            {{ faq.answer }}
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

// Sidebar selected index
const selectedSidebarIndex = ref(0); // Default is the first sidebar item

// Initialize FAQ data
const faqs = ref([
  {
    sidebarText: 'About Thortok',
    question: 'What is Thortok and what services does it offer?',
    answer: 'Thortok is a digital platform that provides tools for creators...',
    isOpen: false,  // Initially closed
  },
  {
    sidebarText: 'Monetization Programs',
    question: 'How can creators earn from Thortok?',
    answer: 'Thortok provides various monetization programs that help creators earn income...',
    isOpen: false,
  },
  {
    sidebarText: 'Participation and Content Creation',
    question: 'Who can join Thortok and start creating content?',
    answer: 'Anyone can join Thortok as a creator and start sharing their content...',
    isOpen: false,
  },
  {
    sidebarText: 'Account and Settings',
    question: 'How do I manage my account and settings?',
    answer: 'You can access and modify your account settings through the user dashboard...',
    isOpen: false,
  },
  {
    sidebarText: 'Support and Reporting',
    question: 'How can I contact support for issues or reports?',
    answer: 'For support, you can reach out through our help center or via email...',
    isOpen: false,
  },
]);

// Function to select the sidebar and show the respective FAQ
const selectSidebar = (index) => {
  selectedSidebarIndex.value = index; // Update the sidebar selection
  faqs.value.forEach((faq, i) => {
    faq.isOpen = (i === index) ? !faq.isOpen : false;  // Open the selected FAQ, close the others
  });
};

// Toggle the visibility of the FAQ answer
const toggleAnswer = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;  // Toggle the selected FAQ
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
  color: #005B52;
}

.bg-transparent {
  background-color: transparent;
}

.md:col-span-10 {
  margin-top: 0 !important;
}
</style>
