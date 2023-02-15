<template>
  <div class="fixed inset-x-0 top-0">
    <div class="bg-blue-zodiac-600 px-4 py-3 text-white">
      <p class="text-sm font-medium text-center" id="alert">
        Currently under development
      </p>
    </div>
  </div>

  <section class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-3xl font-extrabold sm:text-5xl" id="title">
          Nuxt 3 Personal Kit
          <strong
            class="font-extrabold text-blue-zodiac-700 sm:block"
            id="subtitle"
            >Facilitate future development
          </strong>
        </h1>

        <p class="mt-4 sm:text-xl sm:leading-relaxed" id="description">
          Tailwind Css, Pinia, VeeValidate, Yup, Vitest and Storybook
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            class="block w-full rounded bg-blue-zodiac-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-zodiac-700 focus:outline-none focus:ring active:bg-blue-zodiac-500 sm:w-auto"
            href="/get-started"
          >
            Get Started
          </a>

          <a
            class="block w-full rounded px-12 py-3 text-sm font-medium text-blue-zodiac-600 shadow hover:text-blue-zodiac-700 focus:outline-none focus:ring active:text-blue-zodiac-500 sm:w-auto"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
