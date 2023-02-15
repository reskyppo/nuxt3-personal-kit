<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: "Nuxt 3 Personal Kit",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "Nuxt 3 Personal Kit Facilitate future development Tailwind Css, Pinia, VeeValidate, Yup, Vitest and Storybook",
    },
  ],
});
</script>
