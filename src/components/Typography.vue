<script setup lang="ts">
import { Ref, computed, ref } from 'vue';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'
  is: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'
}

const props = withDefaults( defineProps<TypographyProps>(), {
  variant: 'p',
  is: 'p',
})

const Tag: Ref<any> = ref(props.is || 'p')
const classList = computed(() => {
  const base: Record<string, string> = {
    h1: 'text-lg font-semibold text-default',
    h2: 'font-medium  text-default',
    h3: 'text-sm font-medium text-default',
    h4: 'text-xs font-medium text-default',
    span: 'text-xs text-muted',
    p: 'text-sm text-default',
  }

  return base[props.variant || props.is]
})
</script>

<template>
  <Tag :class="classList">
    <slot></slot>
  </Tag>
</template>
