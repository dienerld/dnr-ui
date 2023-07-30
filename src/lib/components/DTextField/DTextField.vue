<script setup lang="ts">
import {
  InputHTMLAttributes,
  computed,
  reactive,
  ref,
  useAttrs,
  watch
} from 'vue'
import { DButton, DTypography } from '..'
import { IconEye, IconEyeSlash, IconWarning } from '../../icons'
import { concatClass } from '../../utils/utilsCss'

interface TextFieldCustomProps {
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  rounded?: boolean
  class?: string
  inputClass?: string
  spanClass?: string
  error?: boolean
  helperText?: string
  value?: string
  fullWidth?: boolean
  disabled?: boolean
}

interface TextFieldProps
  extends /* @vue-ignore */ Omit<
      InputHTMLAttributes,
      'placeholder' | 'type' | 'color' | 'class' | 'value' | 'disabled'
    >,
    TextFieldCustomProps {}

const emit = defineEmits(['change', 'keyup', 'update:value'])
const props = defineProps<TextFieldProps>()
const attrs = useAttrs()
const propsReactive = reactive(props)
const passwordIsVisible = ref(false)
const inputType = ref(propsReactive.type || 'text')

const hasIcon = computed(() => props.type === 'password' || props.error)

watch(passwordIsVisible, () => {
  if (props.type === 'password' && !passwordIsVisible.value) {
    inputType.value = 'password'
  } else {
    inputType.value = 'text'
  }
})
</script>

<template>
  <div
    :class="
      concatClass(
        'flex flex-col w-1/2',
        fullWidth ? 'w-full' : '',
        $props.class ?? ''
      )
    "
  >
    <div class="relative flex w-full items-center">
      <input
        v-bind="attrs"
        :type="inputType"
        :data-error="error"
        :disabled="disabled"
        :class="
          concatClass(
            `
            w-full p-2 indent-1
            text-secondary bg-uie-primary
            border border-uie-tertiary
            outline outline-0 outline-uie-tertiary
            focus:outline active:outline-1
            placeholder:text-secondary
            disabled:bg-uie-tertiary disabled:text-secondary
            data-[error=true]:border-error
            data-[error=true]:active:outline-error
            data-[error=true]:focus:border-error
            data-[error=true]:active:border-error
            data-[error=true]:hover:border-error
          `,
            rounded ? 'rounded-full' : 'rounded-xl',
            hasIcon ? (error ? 'pr-16' : 'pr-11') : '',
            inputClass ?? '',
            fullWidth ? 'w-full' : ''
          )
        "
        :placeholder="props.placeholder"
        :value="value"
        @input="(e: any) => emit('update:value', e.target.value)"
        @keyup="(e: any) => emit('keyup', e)"
        @change="(e: any) => emit('change', e)"
      />
      <div class="absolute right-2 flex" v-if="hasIcon">
        <div class="flex items-center" v-if="type === 'password'">
          <IconWarning v-if="error" class="text-error" />
          <DButton
            size="xs"
            variant="icon"
            @click="passwordIsVisible = !passwordIsVisible"
            class="text-brand dark:text-primary"
            v-if="type === 'password'"
          >
            <div v-if="passwordIsVisible">
              <IconEyeSlash />
              <span class="sr-only">Hidden Password</span>
            </div>
            <div v-else>
              <IconEye />
              <span class="sr-only">Show Password</span>
            </div>
          </DButton>
        </div>

        <div v-else>
          <IconWarning v-if="error" class="text-error" />
        </div>
      </div>
    </div>

    <DTypography
      is="span"
      v-if="error"
      :class="
        concatClass('text-xs indent-2 text-error', $props.spanClass ?? '')
      "
    >
      {{ helperText }}
    </DTypography>
  </div>
</template>
