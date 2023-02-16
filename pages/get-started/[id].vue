<template>
  <div>this will be detail page</div>
</template>
<script lang="ts" setup>
definePageMeta({ layout: "custom" });
const { getPostDataDetail } = usePostStore();
const route = useRoute();
const { data } = await useAsyncData("post", () =>
  getPostDataDetail(route.params.id.toString())
);
</script>
