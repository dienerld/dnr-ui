<script setup lang="ts">
import { ButtonHTMLAttributes, computed, useAttrs } from 'vue'
import { concatClass } from '../../utils/utilsCss'
import { IconLoading } from '../../icons'

export type variantButton = 'contained' | 'outline' | 'minimal' | 'icon'

export type sizeButton = 'xs' | 'sm' | 'md' | 'lg'
export interface ButtonCustomProps {
  variant: variantButton
  type?: 'button' | 'submit' | 'reset'
  size?: sizeButton
  fullWidth?: boolean
  class?: any
  loading?: boolean
  rounded?: boolean
}

export interface ButtonProps
  extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type'>,
    ButtonCustomProps {}

const props = defineProps<ButtonProps>()
const attrs = useAttrs()
const twVariant: Record<variantButton | 'loading', string> = {
  contained: 'bg-brand hover:bg-brand-light text-white',
  outline:
    'border border-brand text-primary bg-uie-primary hover:bg-brand-light hover:text-white',
  minimal: 'bg-uie-primary text-brand hover:bg-brand-light hover:text-white',

  icon: 'bg-transparent p-1 focus:border-none focus:outline-1 focus:outline-brand-light active:bg-brand-light transition',
  loading: 'pointer-events-none'
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
    props.disabled ? '' : twVariant[props.variant],
    props.loading ? twVariant.loading : '',
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
