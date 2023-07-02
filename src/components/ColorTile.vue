<script setup lang="ts">
interface ColorTileProps {
  color: string
  label?: string
}

defineProps<ColorTileProps>()
</script>

<template>
  <div class="flex items-center gap-1">
    <div class="h-8 w-8 rounded border border-gray-200" :class="color"></div>
    <div class="text-sm">
      {{ label || color }}
    </div>
  </div>
</template>
