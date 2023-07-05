<script setup lang="ts">
import { computed } from 'vue'
import { Colors } from '../../types'
import { concatClass } from '../../utils/utilsCss'
import { IconLoading } from '../../icons'

export type variantButton = 'contained' | 'outlined' | 'minimal' | 'icon'

export type sizeButton = 'sm' | 'md' | 'lg' | 'min'
export interface ButtonProps {
  variant: variantButton
  color?: Colors
  size?: sizeButton
  fullWidth?: boolean
  disabled?: boolean
  class?: any
  loading?: boolean
  to?: string
}
const props = defineProps<ButtonProps>()

const twVariant: Record<variantButton | 'disabled' | 'loading', string> = {
  contained: `bg-brand hover:bg-brand-light text-white
      data-[color=secondary]:bg-brand-secondary
      data-[color=secondary]:hover:bg-brand-secondary-light
    `,
  outlined: `border border-brand text-brand bg-uie-primary
      hover:bg-brand-light hover:text-white
      data-[color=secondary]:border-brand-secondary
      data-[color=secondary]:text-brand-secondary
      data-[color=secondary]:hover:bg-brand-secondary-light
      data-[color=secondary]:hover:text-white
    `,
  minimal: `bg-uie-primary text-brand hover:bg-brand-light hover:text-white
      data-[color=secondary]:text-brand-secondary
      data-[color=secondary]:hover:bg-brand-secondary-light
      data-[color=secondary]:hover:text-white
    `,

  icon: 'bg-transparent',
  disabled: 'bg-uie-primary text-uit-tertiary pointer-events-none',
  loading: 'pointer-events-none'
}

const twSize: Record<sizeButton, string> = {
  min: 'text-xs',
  sm: 'text-xs py-1 px-2',
  md: 'text-sm py-2 px-4',
  lg: 'text-base py-2 px-6'
}

const classList = computed<string>(() => {
  return concatClass(
    'flex items-center justify-center',
    twVariant[props.disabled ? 'disabled' : props.variant],
    props.loading ? twVariant.loading : '',
    twSize[props.size || 'md'],
    props.fullWidth ? 'w-full' : ''
  )
})
</script>

<template>
  <button
    type="button"
    :data-color="color"
    :disabled="props.disabled"
    :class="
      concatClass(
        'rounded-full font-bold h-min leading-tight cursor-pointer',
        classList,
        $props.class ?? ''
      )
    "
  >
    <slot name="loading" v-if="props.loading">
      <div class="flex justify-center py-0.5">
        <span class="sr-only">Loading</span>
        <IconLoading class="animate-spin" />
      </div>
    </slot>

    <slot v-else-if="variant === 'icon'" name="icon">
      <div>
        <slot />
      </div>
    </slot>

    <slot v-else />
  </button>
</template>
