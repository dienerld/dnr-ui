<script setup lang="ts">
import { ref } from 'vue'
// import Cards from './pages/Cards.vue'
// import Buttons from './pages/Buttons.vue'
import { DButton } from '@lib/components/DButton'
// import Inputs from './pages/Inputs.vue'
import Navbar from './pages/Navbar.vue'

const theme = ref('light')
</script>

<template>
  <div class="flex h-screen flex-col" :class="theme">
    <!-- <div class="mb-4"> -->
    <DButton
      variant="contained"
      @click="theme = theme === 'dark' ? 'light' : 'dark'"
    >
      Change Theme
    </DButton>
    <!--
      <span class="p-2 text-black">{{ theme }}</span>
    </div>
    <Buttons
      class="container mx-auto flex flex-col bg-uie-neutral dark:bg-slate-500"
    />
    <Cards class="bg-uie-primary dark:bg-slate-500" />
    <Inputs class="bg-uie-primary dark:bg-slate-500" /> -->

    <Navbar />
  </div>
</template>

<style scoped></style>
