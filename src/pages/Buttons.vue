<script setup lang="ts">
import { ref } from 'vue'
import { Colors } from '@/types'
import { DCard, DTypography } from '@/components'
import { DButton, sizeButton, variantButton } from '@/components/DButton'

const variants: variantButton[] = ['contained', 'outlined', 'minimal', 'icon']
const sizes: sizeButton[] = ['sm', 'md', 'lg']

const color = ref<Colors>('primary')
</script>

<template>
  <DCard class="p-4">
    <DTypography is="h1">Buttons</DTypography>
    <DCard class="flex-row items-center gap-3">
      <DButton
        variant="contained"
        :color="color"
        class="w-1/4"
        @click="color = color === 'primary' ? 'secondary' : 'primary'"
      >
        Change Color</DButton
      >
      <DTypography is="p">{{ color }}</DTypography>
    </DCard>
    <DCard class="flex-row flex-wrap">
      <DCard v-for="variant in variants" :key="variant">
        <DTypography is="h2">{{ variant }}</DTypography>
        <DButton
          :color="color"
          v-for="size in sizes"
          :variant="variant"
          :key="size"
          :size="size"
        >
          {{ size }}
        </DButton>
      </DCard>
      <DCard>
        <DButton :color="color" variant="contained" size="sm" disabled>
          disabled
        </DButton>
        <DButton :color="color" variant="contained" size="md" loading>
        </DButton>
        <DButton
          :color="color"
          variant="contained"
          size="lg"
          loading
          full-width
        >
        </DButton>
      </DCard>
    </DCard>

    <DButton :color="color" variant="contained" size="lg" disabled>
      disabled
    </DButton>

    <DButton :color="color" variant="contained" size="sm" full-width>
      full width
    </DButton>
    <DButton :color="color" variant="contained" size="md" full-width>
      full width
    </DButton>
    <DButton :color="color" variant="contained" size="lg" full-width>
      full width
    </DButton>
  </DCard>
</template>
@/components/DButton/Button.vue @/components/DButton/Button.vue
