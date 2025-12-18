<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#020618" : "white",
);

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-4PK1CYHVXR",
      async: true,
    },
    {
      innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-4PK1CYHVXR');`,
    },
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDJ3RW6G');`,
      type: "text/javascript",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  titleTemplate: "%s",
});

const { data: navigation } = await useAsyncData(
  "navigation",
  () => queryCollectionNavigation("docs"),
  {
    transform: (data) =>
      data.find((item) => item.path === "/docs")?.children || [],
  },
);
const { data: files } = useLazyAsyncData(
  "search",
  () => queryCollectionSearchSections("docs"),
  {
    server: false,
  },
);

provide("navigation", navigation);
</script>

<template>
  <UApp>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WDJ3RW6G"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      />
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
