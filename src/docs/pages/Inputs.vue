<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { DButton, DTypography } from '@lib/components'
import DCard from '@lib/components/DCard'
import DTextField from '@lib/components/DTextField'

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

// watch to verify password
watch(
  () => login.password,
  () => {
    loginValid.password = login.password.length >= 20
  }
)
</script>
<template>
  <div>
    <DCard color="primary">
      <DTextField placeholder="Nome" />
      <DTextField placeholder="Nome" rounded />
    </DCard>

    <DCard color="secondary">
      <DTextField placeholder="Nome" color="secondary" />
      <DTextField placeholder="Nome" color="secondary" rounded />
    </DCard>

    <DCard>
      <DButton @click="error = !error" variant="contained" rounded>
        toggle error</DButton
      >
      <DTextField
        placeholder="Nome"
        :error="error"
        helper-text="Insira um nome válido"
      />
      <DTextField
        type="password"
        placeholder="Digite uma senha"
        rounded
        :error="error"
        helper-text="Insira um nome válido"
      />
      <DTextField
        fullWidth
        color="secondary"
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
        <DButton type="submit" variant="contained" class="mt-4">Enviar</DButton>
      </form>
    </DCard>
  </div>
</template>
