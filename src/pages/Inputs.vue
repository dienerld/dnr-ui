<script setup lang="ts">
import { ref, watch } from 'vue'
import { DButton } from '..'
import DCard from '../components/DCard/DCard.vue'
import DTextField from '../components/DTextField'

const error = ref(false)

const email = ref('')
const emailValid = ref(true)
// watch to verify email
watch(email, () => {
  console.log(email.value)

  emailValid.value = email.value.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
})
</script>
<template>
  <DCard color="primary">
    <DTextField placeholder="Nome" />
    <DTextField placeholder="Nome" rounded />
  </DCard>

  <DCard color="secondary">
    <DTextField placeholder="Nome" color="secondary" />
    <DTextField placeholder="Nome" color="secondary" rounded />
  </DCard>

  <DCard>
    <DButton @click="error = !error" variant="contained">toggle error</DButton>
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
      color="secondary"
      type="password"
      placeholder="Digite uma senha"
      rounded
      :error="error"
      helper-text="Insira um nome válido"
    />
  </DCard>

  <DTextField
    type="email"
    placeholder="Digite email"
    rounded
    :error="!emailValid"
    helper-text="Insira um email válido"
    v-model:value.lazy="email"
  />

  <input type="text" />
</template>
