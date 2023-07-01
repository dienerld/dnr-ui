<script setup lang="ts">
import { concatClass } from '@/utils/utilsCss'
import { Colors } from '@/types'

export interface DCardProps {
  color?: Colors
  class?: string
}
defineProps<DCardProps>()
</script>
<template>
  <div
    :data-color="color"
    :class="
      concatClass(
        `flex w-min flex-nowrap flex-col gap-2 rounded-md
          bg-page p-2 text-start text-brand shadow-sm
          data-[color=secondary]:bg-brand-secondary
        `,
        $props.class || ''
      )
    "
  >
    <slot />
  </div>
</template>
