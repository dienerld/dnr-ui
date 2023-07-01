<script setup lang="ts">
import { DButton, sizeButton, variantButton } from '@/components/DButton'
const variants: variantButton[] = ['contained', 'outlined', 'minimal', 'icon']
const sizes: sizeButton[] = ['sm', 'md', 'lg']
</script>

<template>
  <div class="space-y-4 p-4">
    <div class="flex items-center gap-3 text-black">
      <DButton
        v-for="variant in variants"
        :key="variant"
        :variant="variant"
        size="sm"
      >
        {{ variant }}
      </DButton>
      <DButton
        v-for="size in sizes"
        variant="contained"
        :key="size"
        :size="size"
      >
        {{ size }}
      </DButton>

      <DButton variant="contained" size="sm" disabled> disabled </DButton>
    </div>

    <div class="flex items-center gap-3">
      <DButton
        v-for="variant in variants"
        :key="variant"
        :variant="variant"
        size="sm"
        color="secondary"
      >
        {{ variant }}
      </DButton>
    </div>

    <div class="flex items-center gap-3">
      <DButton
        v-for="size in sizes"
        variant="contained"
        :key="size"
        :size="size"
      >
        Diener
      </DButton>

      <DButton variant="contained" size="lg" disabled> disabled </DButton>
    </div>
    <div class="flex flex-col gap-2">
      <DButton variant="contained" size="sm" full-width> full width </DButton>
      <DButton variant="contained" size="md" full-width> full width </DButton>
      <DButton variant="contained" size="lg" full-width> full width </DButton>
    </div>
  </div>
</template>
@/components/DButton/Button.vue @/components/DButton/Button.vue
