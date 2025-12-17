<script setup lang="ts"></script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2">
        <AppLogo class="w-auto h-10 shrink-0" />
        <h6 class="text-2xl font-bold">Groop</h6>
      </NuxtLink>
    </template>

    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
