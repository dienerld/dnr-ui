<script setup lang="ts">
import DButton, { sizeButton, variantButton } from '../components/Button.vue'
import DCard from '../components/Card.vue'

const variants: variantButton[] = ['contained', 'outlined', 'minimal']
const sizes: sizeButton[] = ['sm', 'md', 'lg']
</script>

<template>
  <DCard>
    <div class="space-x-4 space-y-4">
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
    <div class="space-x-4 space-y-4">
      <DButton
        v-for="variant in variants"
        :key="variant"
        :variant="variant"
        size="sm"
        color="secondary"
      >
        {{ variant }}
      </DButton>

      <DButton
        v-for="size in sizes"
        variant="contained"
        :key="size"
        :size="size"
        color="secondary"
      >
        {{ size }}
      </DButton>

      <DButton variant="contained" size="sm" disabled> disabled </DButton>
    </div>
  </DCard>
</template>
