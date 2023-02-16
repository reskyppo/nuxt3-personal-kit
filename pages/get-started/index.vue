<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <article
      v-for="item in data"
      :key="item.id"
      class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
    >
      <h3
        class="mt-0.5 text-lg font-medium text-gray-900 capitalize line-clamp-1"
      >
        {{ item?.title || "title" }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
        {{ item?.body || "body" }}
      </p>
      <a
        :href="`/get-started/${item.id}`"
        class="cursor-pointer group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
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
  </div>
</template>
<script lang="ts" setup>
definePageMeta({ layout: "custom" });
const { getPostData } = usePostStore();
const { data } = await useAsyncData("post", () => getPostData());
</script>
