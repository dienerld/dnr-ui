<script setup lang="ts">
import { Ref, computed, ref } from 'vue'
import { concatClass } from '../utils/utilsCss'
export type variantButton = 'contained' | 'outlined' | 'minimal' | 'icon'
export type sizeButton = 'sm' | 'md' | 'lg'
export type colorButton = 'primary' | 'secondary'

interface ButtonProps {
  variant: variantButton
  color?: colorButton
  size?: sizeButton
  is?: any
  fullWidth?: boolean
  disabled?: boolean
}

const props = defineProps<ButtonProps>()
const Tag: Ref<any> = ref(props.is || 'button')

const classList = computed<string>(() => {
  const twVariant: Record<variantButton | 'disabled', string> = {
    contained: `bg-brand hover:bg-brand-light text-white
      data-[color=secondary]:bg-brand-secondary
      data-[color=secondary]:hover:bg-brand-secondary-light
    `,
    outlined: `border border-brand text-brand bg-uie-neutral
      hover:bg-brand-light hover:text-white
      data-[color=secondary]:border-brand-secondary
      data-[color=secondary]:text-brand-secondary
      data-[color=secondary]:hover:bg-brand-secondary-light
      data-[color=secondary]:hover:text-white
    `,
    minimal: `bg-uie-neutral text-brand hover:bg-brand-light hover:text-white
      data-[color=secondary]:text-brand-secondary
      data-[color=secondary]:hover:bg-brand-secondary-light
      data-[color=secondary]:hover:text-white
    `,

    icon: 'p-2',
    disabled: 'bg-uie-neutral text-uit-tertiary pointer-events-none',
  }

  const twSize: Record<sizeButton, string> = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-2 px-6',
  }
  return concatClass(
    twVariant[props.disabled ? 'disabled' : props.variant],
    twSize[props.size || 'md'],
    props.fullWidth ? 'w-full' : '',
  )
})
</script>

<template>
  <Tag
    :data-color="color || 'primary'"
    :disabled="props.disabled"
    :class="
      concatClass(
        'rounded-full font-bold h-min leading-tight cursor-pointer',
        classList,
      )
    "
  >
    <slot />
  </Tag>
</template>
