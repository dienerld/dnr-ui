<script setup lang="ts">
import DTextField from '@/lib/components/DTextField/DTextField.vue'
import { Colors } from '@/lib/types'
import { DButton, DTypography, DCard } from '@lib/components'

import { reactive, ref, watch } from 'vue'

const error = ref(false)
const login = reactive({
  email: '',
  password: ''
})
const loginValid = reactive({
  email: true,
  password: true
})
// watch to verify email
watch(
  () => login.email,
  () => {
    // @ts-expect-error
    loginValid.email = login.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }
)
const color = ref<Colors>('primary')

// watch to verify password
watch(
  () => login.password,
  () => {
    loginValid.password = login.password.length >= 20
  }
)
</script>
<template>
  <DCard class="bg-white p-4 dark:bg-slate-600">
    <DTypography is="h1">Buttons</DTypography>
    <DCard class="flex-row items-center gap-3" elevation="1">
      <DButton
        variant="contained"
        :color="color"
        class="w-1/4"
        @click="color = color === 'primary' ? 'secondary' : 'primary'"
      >
        Change Color</DButton
      >
      <DTypography is="p">{{ color }}</DTypography>
    </DCard>
    <div>
      <DCard :color="color">
        <DTextField :color="color" placeholder="Nome" />
        <DTextField :color="color" placeholder="Nome" rounded />
      </DCard>

      <DCard :color="color">
        <DTextField :color="color" placeholder="Nome" />
        <DTextField :color="color" placeholder="Nome" rounded />
      </DCard>

      <DCard>
        <DButton @click="error = !error" variant="contained" rounded>
          toggle error</DButton
        >
        <DTextField
          :color="color"
          placeholder="Nome"
          :error="error"
          helper-text="Insira um nome válido"
        />
        <DTextField
          :color="color"
          type="password"
          placeholder="Digite uma senha"
          rounded
          :error="error"
          helper-text="Insira um nome válido"
        />
        <DTextField
          :color="color"
          fullWidth
          type="password"
          placeholder="Digite uma senha"
          rounded
          :error="error"
          helper-text="Insira um nome válido"
        />
      </DCard>

      <DCard class="my-4">
        <form action="" autocomplete="on">
          <DTypography is="label" for="email"> Using v-model </DTypography>
          <DTextField
            :color="color"
            id="email"
            name=""
            class="w-2/3"
            type="email"
            placeholder="Email"
            rounded
            :error="!loginValid.email"
            helper-text="Insira um email válido"
            v-model:value="login.email"
            autocomplete="on"
          />
          <div class="mt-3">
            <DTypography is="label" for="password"
              >using value and change/keyup</DTypography
            >
            <DTextField
              :color="color"
              class="w-2/3"
              type="password"
              placeholder="Password"
              rounded
              :error="!loginValid.password"
              helper-text="Insira um email válido"
              :value="login.password"
              @change="login.password = $event.target.value"
              autocomplete="on"
            />
          </div>
          <DButton type="submit" variant="contained" class="mt-4"
            >Enviar</DButton
          >
        </form>
      </DCard>
    </div>
  </DCard>
</template>
