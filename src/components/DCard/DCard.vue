<script setup lang="ts">
import { BaseHTMLAttributes, computed, useAttrs } from 'vue'
import { concatClass } from '../../utils/utilsCss'
import { Colors, Elevations } from '../../types'

export interface DCardProps
  extends /* @vue-ignore */ Omit<BaseHTMLAttributes, 'class'> {
  color?: Colors
  class?: string
  elevation?: Elevations
}

const props = defineProps<DCardProps>()
const attrs = useAttrs()

// TODO - Definir shadows
const classList = computed(() => {
  const twElevations: Record<Elevations, string> = {
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
    :data-color="color"
    :class="
      concatClass(
        `flex flex-nowrap flex-col gap-2 rounded-md
          bg-uie-neutral p-2 text-start text-brand shadow-sm
          data-[color=secondary]:bg-brand-secondary
        `,
        classList,
        $props.class ?? ''
      )
    "
  >
    <slot />
  </div>
</template>
