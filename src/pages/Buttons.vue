<script setup lang="ts">
import DButton, { sizeButton, variantButton } from '../components/Button.vue'
import DCard from '../components/Card.vue'

const variants: variantButton[] = ['contained', 'outlined', 'minimal']
const sizes: sizeButton[] = ['sm', 'md', 'lg']
</script>

<template>
  <DCard class="space-y-4 pt-10">
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
        color="secondary"
      >
        {{ size }}
      </DButton>

      <DButton variant="contained" size="lg" disabled> disabled </DButton>
    </div>
    <div class="flex flex-col gap-2">
      <DButton variant="contained" size="sm" full-width> full width </DButton>
      <DButton variant="contained" size="md" full-width> full width </DButton>
      <DButton variant="contained" size="lg" full-width> full width </DButton>
    </div>
  </DCard>
</template>
