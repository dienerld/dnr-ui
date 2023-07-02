<script setup lang="ts">
import DButton from '../components/DButton/DButton.vue'
import DCard from '../components/DCard'
import DTypography from '../components/DTypography'
</script>

<template>
  <div class="container mx-auto mt-10 flex flex-wrap gap-2 p-4">
    <DCard class="">
      <DTypography is="h2">default - flex-col</DTypography>
      <DButton variant="contained">Second Element</DButton>
    </DCard>

    <DCard class="w-1/2">
      <DTypography is="h2">w-1/2</DTypography>
      <DButton variant="contained">Second Element</DButton>
    </DCard>

    <DCard class="flex-row">
      <DTypography is="h2">flex-row</DTypography>
      <DButton variant="contained">Second Element</DButton>
    </DCard>

    <DCard class="flex-1">
      <DTypography is="h1" color="secondary">flex-1</DTypography>
      <DButton variant="contained">Second Element</DButton>
    </DCard>
  </div>
</template>
