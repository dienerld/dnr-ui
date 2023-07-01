<script setup lang="ts">
import DButton from '@/components/DButton/DButton.vue'
import DCard from '@/components/DCard'
</script>

<template>
  <div class="container mx-auto mt-10 flex flex-wrap gap-2 p-4">
    <DCard class="">
      <h2 class="text-2xl">default - flex-col</h2>
      <DButton variant="contained">Second Element</DButton>
    </DCard>

    <DCard class="w-1/2">
      <h2 class="text-2xl">w-1/2</h2>
      <DButton variant="contained">Second Element</DButton>
    </DCard>

    <DCard class="flex-row">
      <h2 class="text-2xl">flex-row</h2>
      <DButton variant="contained">Second Element</DButton>
    </DCard>

    <DCard class="flex-1">
      <h2 class="text-2xl">flex-1</h2>
      <DButton variant="contained">Second Element</DButton>
    </DCard>
  </div>
</template>
