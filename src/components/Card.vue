<script setup lang="ts">
interface CardProps {
  isLoading?: boolean
}

defineProps<CardProps>()
</script>


<template>
  <div
    role="progressbar"
    class="flex w-full p-2 rounded-md bg-gray-100 animate-pulse dark:bg-gray-600">
    <div class=" flex-none h-20 w-20 rounded-md bg-gray-300 dark:bg-gray-400" v-if="isLoading"/>

    <div class="px-2 flex-1 bg-slate-800" v-else>

      <slot/>
    </div>
    </div>
</template>
