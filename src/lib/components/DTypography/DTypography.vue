<script setup lang="ts">
import { Ref, computed, ref } from 'vue'
import { concatClass } from '../../utils/utilsCss'
type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'span'
  | 'p'
  | 'a'
  | 'label'
  | Record<string, string>

export type DTypographyProps = {
  is: Variant
  variant?: Variant
  class?: string
}

const props = defineProps<DTypographyProps>()
const Tag: Ref<any> = ref(props.is || 'p')
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
      p: 'text-base',
      a: 'text-base cursor-pointer'
    }

    return options[kind]
  }

  return concatClass(twBase(props.variant || props.is))
})
</script>

<template>
  <Tag
    :data-color="color"
    :class="
      concatClass(
        `text-uit-primary
        data-[color=secondary]:text-uit-secondary`,
        classList,
        props.class ?? ''
      )
    "
  >
    <slot />
  </Tag>
</template>
