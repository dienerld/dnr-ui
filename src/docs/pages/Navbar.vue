<script setup lang="ts">
import { DCard, DTypography } from '@/lib'
import DNavbar from '@/lib/components/DNavbar/DNavbar.vue'
import DDivider from '@lib/components/DDivider'
import Logo from '../assets/logo-vue.svg'
</script>

<template>
  <div class="flex h-full gap-2">
    <DNavbar>
      <template #icon>
        <img :src="Logo" class="h-full w-full text-primary" />
      </template>

      <template #short>
        <DTypography is="p">Diener</DTypography>
        <DDivider />
        <DTypography is="p">short 1</DTypography>
        <DDivider />
        <DTypography is="p">short 2</DTypography>
      </template>

      <template #long>
        <DTypography is="p">Long</DTypography>
        <DDivider />
        <DTypography is="p">Long 1</DTypography>
        <DDivider />
        <DTypography is="p">Long 2</DTypography>
      </template>
    </DNavbar>
    <DCard class="w-[700px]">
      <DTypography is="h1"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        commodi magni nulla praesentium dolorum ea consequatur? Doloremque
        necessitatibus voluptate inventore et magnam. Inventore deserunt veniam
        minus sunt, minima soluta iusto sequi alias voluptatibus laborum ipsum
        impedit reiciendis natus libero? Reiciendis.</DTypography
      >
    </DCard>
  </div>
</template>
