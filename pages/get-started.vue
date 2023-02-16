<template>
  <article
    class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
  >
    <h3 class="mt-0.5 text-lg font-medium text-gray-900">
      {{ post?.title || "title" }}
    </h3>
    <pre>{{ post }}</pre>
    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
      {{ post?.body || "body" }}
    </p>
    <a
      href="#"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </a>
  </article>
</template>
<script lang="ts" setup>
import { usePostStore } from "../stores/usePost";
definePageMeta({ layout: "custom" });
const { post } = usePostStore();
</script>
