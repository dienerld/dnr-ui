<script setup lang="ts">
import { BaseHTMLAttributes, computed, useAttrs } from 'vue'
import { concatClass } from '../../utils/utilsCss'
import { Elevations } from '../../types'

export interface DCardProps
  extends /* @vue-ignore */ Omit<BaseHTMLAttributes, 'class'> {
  overlay?: boolean
  class?: string
  elevation?: Elevations
}

const props = defineProps<DCardProps>()
const attrs = useAttrs()

// TODO - Definir shadows
const classList = computed(() => {
  const twElevations: Record<Elevations, string> = {
    none: 'shadow-none',
    1: 'shadow-md',
    2: 'shadow-lg',
    3: 'shadow-xl'
  }

  return twElevations[props.elevation!] || ''
})
</script>
<template>
  <div
    v-bind="attrs"
    :class="
      concatClass(
        `flex flex-nowrap flex-col gap-2 rounded-md
          bg-page-paper p-2 text-start text-primary shadow-sm
        `,
        classList,
        overlay ? 'bg-page' : '',
        $props.class ?? ''
      )
    "
  >
    <slot />
  </div>
</template>
