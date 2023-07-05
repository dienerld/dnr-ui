<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { IconWarning, IconEye, IconEyeSlash } from '../../icons'
import { Colors } from '../../types'
import { concatClass } from '../../utils/utilsCss'
import { DButton } from '..'

interface TextFieldProps {
  placeholder: string
  type?: 'text' | 'password' | 'email'
  rounded?: boolean
  color?: Colors
  class?: string
  inputClass?: string
  spanClass?: string
  error?: boolean
  helperText?: string
  value?: string
}

const props = defineProps<TextFieldProps>()
const hasIcon = computed(() => {
  return props.type === 'password' || props.error
})

const emit = defineEmits(['change', 'keyup', 'update:Value'])

const passwordIsVisible = ref(false)
const inputType = ref(props.type || 'text')
watch(passwordIsVisible, () => {
  if (props.type === 'password' && !passwordIsVisible.value) {
    inputType.value = 'password'
  } else {
    inputType.value = 'text'
  }
})
</script>

<template>
  <div :class="concatClass('flex flex-1 flex-col', $props.class ?? '')">
    <div class="relative flex w-full flex-1 items-center">
      <input
        :type="inputType"
        :data-color="color"
        :data-error="error"
        :class="
          concatClass(
            `
            w-full p-2 indent-1
            text-uit-primary
            bg-uie-primary
            border-none
            outline-1
            focus:outline
            active:outline-2
            focus:outline-uie-secondary
            active:outline-uie-secondary
            hover:outline-uie-secondary
            hover:text-uit-primary
            placeholder:text-uit-secondary
            data-[color=secondary]:bg-uie-secondary
            data-[color=secondary]:text-brand-secondary
            data-[color=secondary]:placeholder:text-uit-primary
            data-[color=secondary]:hover:text-uit-primary
            data-[color=secondary]:focus:outline-uie-primary
            data-[color=secondary]:active:outline-uie-primary
            data-[color=secondary]:hover:outline-uie-primary
            data-[error=true]:outline
            data-[error=true]:outline-uie-error
            data-[error=true]:focus:outline-uie-error
            data-[error=true]:active:outline-uie-error
            data-[error=true]:hover:outline-uie-error
          `,
            rounded ? 'rounded-full' : 'rounded-xl',
            hasIcon ? 'pr-11' : '',
            $props.inputClass ?? ''
          )
        "
        :placeholder="placeholder"
        :value="value"
        @input="(e: any) => emit('update:Value', e.target.value)"
        @keyup="emit('keyup', $event)"
        @change="emit('change', $event)"
      />
      <div class="absolute right-4" v-if="hasIcon">
        <div class="flex gap-2" v-if="type === 'password'">
          <IconWarning v-if="error" />
          <DButton
            size="min"
            variant="icon"
            @click="passwordIsVisible = !passwordIsVisible"
            v-if="type === 'password'"
            :class="{ 'text-white': color === 'secondary' }"
          >
            <IconEyeSlash v-if="passwordIsVisible" />
            <IconEye v-else />
          </DButton>
        </div>

        <div v-if="type === 'email'"></div>
      </div>
    </div>

    <span
      v-if="error"
      :class="
        concatClass('text-xs indent-3 text-uit-error', $props.spanClass ?? '')
      "
    >
      {{ helperText }}
    </span>
  </div>
</template>
