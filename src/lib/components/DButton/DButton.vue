<script setup lang="ts">
import { ButtonHTMLAttributes, computed, useAttrs } from 'vue'
import { concatClass } from '../../utils/utilsCss'
import { IconLoading } from '../../icons'
import { Colors } from '@/lib/types'

export type variantButton = 'contained' | 'outline' | 'minimal' | 'icon'

export type sizeButton = 'xs' | 'sm' | 'md' | 'lg'
export interface ButtonCustomProps {
  variant: variantButton
  type?: 'button' | 'submit' | 'reset'
  color?: Colors
  size?: sizeButton
  fullWidth?: boolean
  class?: any
  loading?: boolean
  rounded?: boolean
}

export interface ButtonProps
  extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'color'>,
    ButtonCustomProps {}

const props = defineProps<ButtonProps>()
const attrs = useAttrs()
function setVariant(
  color: ButtonCustomProps['color'] = 'primary',
  variant: variantButton
) {
  switch (variant) {
    case 'contained': {
      if (color === 'primary') {
        return 'bg-primary hover:bg-secondary-dark text-contrast'
      }
      return 'bg-secondary hover:bg-primary-dark text-contrast'
    }
    case 'outline': {
      if (color === 'primary') {
        return 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-contrast'
      }
      return 'bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-contrast'
    }
    case 'minimal': {
      if (color === 'primary') {
        return 'bg-transparent hover:bg-secondary-dark text-primary hover:text-contrast'
      }
      return 'bg-transparent hover:bg-secondary-dark text-secondary hover:text-contrast'
    }
    case 'icon': {
      if (color === 'primary') {
        return 'bg-transparent p-1 focus:border-none focus:outline-1 focus:outline-primary-light active:bg-primary-light transition hover:outline hover:outline-1 hover:outline-primary'
      }
      return 'bg-transparent p-1 focus:border-none focus:outline-1 focus:outline-secondary-light active:bg-secondary-light transition hover:outline hover:outline-1 hover:outline-secondary'
    }

    default: {
      return 'bg-primary hover:bg-secondary-dark text-contrast'
    }
  }
}

const twSize: Record<sizeButton, string> = {
  xs: 'text-xs',
  sm: 'text-sm py-1 px-2',
  md: 'text-md py-2 px-4',
  lg: 'text-lg py-3 px-6'
}
const classList = computed<string>(() => {
  return concatClass(
    'flex items-center justify-center flex-nowrap w-1/3',
    props.disabled ? '' : setVariant(props.color, props.variant),
    props.loading ? 'pointer-events-none' : '',
    twSize[props.size ?? 'md'],
    props.fullWidth ? 'w-full' : ''
  )
})
</script>

<template>
  <button
    v-bind="attrs"
    :type="props.type ?? 'button'"
    :disabled="props.disabled"
    :class="
      concatClass(
        'font-bold h-min leading-tight cursor-pointer min-w-min disabled:bg-uie-primary disabled:text-tertiary disabled:pointer-events-none disabled:border-disabled',
        props.rounded ? 'rounded-full' : 'rounded-lg',
        classList,
        props.class ?? ''
      )
    "
  >
    <slot name="loading" v-if="props.loading">
      <div class="flex justify-center py-1">
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
