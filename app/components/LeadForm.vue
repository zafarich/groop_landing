<script setup lang="ts">
import { vMaska } from "maska/vue";
const toast = useToast();

const form = reactive({
  name: "",
  phone: "",
  telegramChannel: "",
});

const loading = ref(false);

async function onSubmit() {
  if (!form.name || !form.phone || !form.telegramChannel) {
    toast.add({
      title: "Xatolik",
      description: "Iltimos, barcha maydonlarni to'ldiring",
      color: "error",
    });
    return;
  }

  loading.value = true;

  try {
    await $fetch("https://cdn.groop.uz/api/v1/leads", {
      method: "POST",
      body: {
        name: form.name,
        phoneNumber: "998" + form.phone.replace(/\s/g, ""),
        telegramChannel: form.telegramChannel,
      },
    });

    toast.add({
      title: "Muvaffaqiyatli!",
      description:
        "Arizangiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz!",
      color: "success",
    });

    // Reset form
    form.name = "";
    form.phone = "";
    form.telegramChannel = "";
  } catch {
    toast.add({
      title: "Xatolik",
      description:
        "Arizani yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
      color: "error",
    });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <UPageSection id="lead-form">
    <template #title>
      <span class="text-primary">Sinab</span> ko'rish
    </template>
    <template #description>
      Biz bilan bog'lanish uchun quyidagi formani to'ldiring. Tez orada siz
      bilan bog'lanamiz!
    </template>

    <UCard class="max-w-xl w-full mx-auto">
      <form @submit.prevent="onSubmit" class="space-y-6">
        <UFormField label="Ism" required>
          <UInput
            v-model="form.name"
            placeholder="Ismingizni kiriting"
            icon="i-lucide-user"
            size="lg"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Telefon raqam" required>
          <UInput
            v-model="form.phone"
            v-maska="'## ### ## ##'"
            placeholder="90 123 45 67"
            size="lg"
            class="w-full"
            :ui="{ base: 'pl-12' }"
          >
            <template #leading> +998 </template>
          </UInput>
        </UFormField>

        <UFormField label="Telegram kanal nomi" required>
          <UInput
            v-model="form.telegramChannel"
            placeholder="@kanal_nomi"
            icon="i-simple-icons-telegram"
            size="lg"
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          size="lg"
          :loading="loading"
          class="w-full flex justify-center"
          icon="i-lucide-send"
        >
          Ariza qoldirish
        </UButton>
      </form>
    </UCard>
  </UPageSection>
</template>
