<script setup lang="ts">
import { computed } from 'vue'
import { concatClass } from '../../utils/utilsCss'
type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'span'
  | 'p'
  | 'label'
  | Record<string, string>

export type DTypographyProps = {
  is: Variant
  variant?: Variant
  class?: string
}

const props = defineProps<DTypographyProps>()

const Tag = props.is ?? 'p'
const classList = computed(() => {
  const twBase = (kind: Variant): string => {
    if (typeof kind !== 'string') {
      kind = 'p'
    }

    const options: Record<string, string> = {
      h1: 'text-2xl sm:text-3xl font-bold',
      h2: 'text-xl sm:text-2xl font-bold',
      h3: 'text-lg sm:text-xl font-bold',
      h4: 'text-lg font-bold',
      p: 'text-md',
      span: 'text-sm',
      label: 'text-xs'
    }

    return options[kind]
  }

  return concatClass(twBase(props.variant || props.is))
})
</script>

<template>
  <Tag :class="concatClass('text-primary', classList, props.class ?? '')">
    <slot />
  </Tag>
</template>
