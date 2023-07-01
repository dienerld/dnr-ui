<script setup lang="ts">
import DCard from '@/components/DCard'
</script>

<template>
  <div class="container mx-auto mt-10 flex gap-2 p-4">
    <DCard class="w-4/12 bg-zinc-200">
      <button>Diener</button>
    </DCard>
    <DCard class="w-4/12 bg-zinc-300 p-0">
      <button class="h-full bg-zinc-400">Diener</button>
    </DCard>
    <DCard class="w-4/12 bg-zinc-400">
      <button>Diener</button>
    </DCard>
  </div>
</template>
