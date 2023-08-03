<script setup lang="ts">
import { ref } from 'vue'
import { Colors } from '@lib/types'
import { DCard, DTypography } from '@lib/components'
import { DButton, sizeButton, variantButton } from '@lib/components/DButton'
import { IconAcademicCap } from '@lib/icons'

const variants: variantButton[] = ['contained', 'outline', 'minimal', 'icon']
const sizes: sizeButton[] = ['sm', 'md', 'lg']

const color = ref<Colors>('primary')

function onClick(event: Event) {
  console.log(event)
  alert(`Event: ${event?.type} - See console for more information`)
}
</script>

<template>
  <DCard class="bg-white p-4 dark:bg-slate-600">
    <DTypography is="h1">Buttons</DTypography>
    <DCard class="flex-row items-center gap-3" elevation="1">
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

    <DCard class="flex-row flex-wrap bg-white dark:bg-slate-600">
      <DCard v-for="variant in variants" :key="variant" elevation="2">
        <DTypography is="h2">{{ variant }}</DTypography>
        <DButton
          :color="color"
          v-for="size in sizes"
          :variant="variant"
          :key="size"
          :size="size"
        >
          {{ variant !== 'icon' ? size : undefined }}
          <IconAcademicCap v-if="variant === 'icon'" />
        </DButton>
      </DCard>
      <DCard elevation="2">
        <DButton :color="color" variant="contained" size="sm" disabled>
          disabled
        </DButton>
        <DButton :color="color" variant="contained" size="md" loading />

        <DButton
          :color="color"
          variant="contained"
          size="lg"
          loading
          full-width
        >
        </DButton>
      </DCard>

      <DCard>
        <DTypography is="h2"> Actions</DTypography>
        <DButton
          :color="color"
          variant="contained"
          size="sm"
          full-width
          @click="onClick"
        >
          Alert
        </DButton>

        <form @submit.prevent="onClick">
          <DButton type="submit" variant="contained"> Submit </DButton>
        </form>
      </DCard>
    </DCard>

    <DCard class="bg-white dark:bg-slate-600">
      <DButton :color="color" variant="contained" size="lg" disabled>
        disabled
      </DButton>

      <DButton :color="color" variant="contained" size="sm" full-width>
        full width
      </DButton>
      <DButton :color="color" variant="contained" size="md" full-width>
        full width
      </DButton>
      <DButton
        :color="color"
        variant="contained"
        size="lg"
        full-width
        href="https://google.com"
      >
        full width
      </DButton>
    </DCard>
  </DCard>
</template>
