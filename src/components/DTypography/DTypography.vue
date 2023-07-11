<script setup lang="ts">
import { Ref, computed, ref } from 'vue'
import { Colors } from '../../types'
import { concatClass } from '../../utils/utilsCss'
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p' | 'label'

interface TypographyProps {
  is: Variant
  variant?: Variant
  color?: Colors
  class?: string
}

const props = defineProps<TypographyProps>()

const Tag: Ref<any> = ref(props.is || 'p')
const classList = computed(() => {
  const twBase: Record<string, string> = {
    h1: 'text-3xl font-bold',
    h2: 'font-2xl font-semibold',
    h3: 'text-xl font-medium',
    h4: 'text-lg font-medium',
    span: 'text-xs text-muted',
    p: 'text-base'
  }

  return concatClass(twBase[props.variant || props.is])
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
