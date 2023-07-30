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
      h1: 'text-3xl font-bold',
      h2: 'font-2xl font-semibold',
      h3: 'text-xl font-medium',
      h4: 'text-lg font-medium',
      span: 'text-xs text-muted',
      p: 'text-base'
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
