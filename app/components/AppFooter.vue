<script setup lang="ts">
const columns = [
  {
    label: "Bog'lanish",
    children: [
      {
        label: "+99890 116 66 99",
      },
      {
        label: "webzafar6699@gmail.com",
      },
    ],
  },
];

const toast = useToast();

const email = ref("");
const loading = ref(false);

function onSubmit() {
  loading.value = true;

  toast.add({
    title: "Subscribed!",
    description: "You've been subscribed to our newsletter.",
  });
}
</script>

<template>
  <USeparator class="h-px" />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns"> </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">Groop • © {{ new Date().getFullYear() }}</p>
    </template>

    <template #right>
      <UButton
        to="https://t.me/ZafarQalandarov"
        target="_blank"
        icon="i-simple-icons-telegram"
        aria-label="Telegram"
        variant="ghost"
        label="Telegram orqali bog'lanish"
      />
    </template>
  </UFooter>
</template>
