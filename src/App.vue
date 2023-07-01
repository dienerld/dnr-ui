<script setup lang="ts">
import Card from './pages/Card.vue'
import Buttons from './pages/Buttons.vue'
import { ref } from 'vue'
import { DButton } from '@/components/DButton'

const theme = ref('dark')
</script>

<template>
  <div class="p-4" :class="theme">
    <div class="mb-4">
      <DButton
        variant="contained"
        @click="theme = theme === 'dark' ? 'light' : 'dark'"
      >
        Change Theme
      </DButton>
      <span class="p-2 text-black">{{ theme }}</span>
    </div>

    <Buttons
      class="container mx-auto flex flex-col bg-uie-primary dark:bg-slate-500"
    />

    <Card class="bg-uie-primary dark:bg-slate-500" />
  </div>
</template>

<style scoped></style>
