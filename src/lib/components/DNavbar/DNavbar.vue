<script setup lang="ts">
import { ref } from 'vue'
import { useElementHover } from '@vueuse/core'
import { IconRadioUnchecked, IconRadioChecked } from '@lib/icons'
import { DButton } from '../DButton'

const folded = ref(false)
const nav = ref()
const navHover = useElementHover(nav)
</script>
<template>
  <template v-if="folded">
    <aside
      class="relative flex h-full w-full min-w-[100px] max-w-[250px] flex-col border-e bg-page-paper"
    >
      <div class="flex flex-row items-center justify-between py-4 pl-1 pr-2">
        <div class="!max-h-[50px] !max-w-[50px] self-center">
          <slot name="icon" />
        </div>
        <DButton
          variant="icon"
          @click="folded = !folded"
          class="m-0 w-min border-none p-0 outline-none hover:border-none hover:outline-none focus:border-none focus:outline-none"
        >
          <IconRadioChecked class="h-4 w-4 text-primary" v-if="folded" />
          <IconRadioUnchecked class="h-4 w-4 text-primary" v-else />
        </DButton>
      </div>
      <slot name="long" />
    </aside>
  </template>
  <template v-else>
    <div class="relative flex max-w-[250px] bg-page-paper">
      <div class="w-[100px] min-w-[100px] bg-page-paper"></div>
      <aside
        ref="nav"
        :class="`flex h-full min-w-[100px] max-w-[250px] flex-col border-e bg-page-paper absolute top-0 left-0 ${
          navHover && 'w-[250px]'
        }`"
      >
        <div
          :class="`flex flex-row items-center ${
            navHover ? 'justify-between' : 'justify-center'
          } py-4 pl-1 pr-2`"
        >
          <div
            :class="`!max-h-[50px] !max-w-[50px] ${!navHover && 'self-center'}`"
          >
            <slot name="icon" />
          </div>
          <DButton
            v-if="folded || navHover"
            variant="icon"
            @click="folded = !folded"
            class="m-0 w-min border-none p-0 outline-none hover:border-none hover:outline-none focus:border-none focus:outline-none"
          >
            <IconRadioChecked class="h-4 w-4 text-primary" v-if="folded" />
            <IconRadioUnchecked class="h-4 w-4 text-primary" v-else />
          </DButton>
        </div>
        <div v-if="navHover">
          <slot name="long" />
        </div>
        <div v-else>
          <slot name="short" />
        </div>
      </aside>
    </div>
  </template>
</template>
