
<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div
    v-if="isLoading"
    role="progressbar"
    class="w-28 h-12 rounded-full bg-gray-300 animate-pulse dark:bg-gray-400"><slot/></div>
</template>
