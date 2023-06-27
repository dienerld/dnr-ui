<script setup lang="ts">
import { computed } from 'vue'
import {concatClass} from '../utils/utilsCss'

interface ButtonProps {
  variant: 'contained' | 'outlined'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = defineProps<ButtonProps>()

const classList = computed<string>(() => {
  const base: Record<string, string> = {
    contained:
      'bg-page-accent hover:text-secondary-accent border border-border hover:bg-page',
    outlined: 'border border-border',
  }
  const size: Record<string, string> = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-3 px-6',
    xl: 'text-lg py-4 px-8',
  }

  return concatClass(base[props.variant], size[props.size || 'md'])
})
</script>

<template>
  <button
    class="inline-block rounded-lg px-4 py-2 text-xs font-medium text-primary"
    :class="classList"
  >
    <slot />
  </button>
</template>
