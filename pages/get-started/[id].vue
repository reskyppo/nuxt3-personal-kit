<template>
  <form
    action=""
    class="mt-6 mb-0 space-y-4 rounded-lg p-4 md:w-1/2 lg:w-1/4 shadow-lg sm:p-6 lg:p-8"
  >
    <p class="text-center text-lg font-medium">Data Detail</p>
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          v-model="data!.title"
          class="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          placeholder="Enter i"
        />
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>

      <div class="relative">
        <textarea
          v-model="data!.body"
          type="password"
          class="w-full h-48 rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          placeholder="Enter body"
        />
      </div>
    </div>
    <button
      @click.prevent="updatePostData(route.params.id.toLocaleString(), data)"
      class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
    >
      Save
    </button>
  </form>
</template>
<script lang="ts" setup>
definePageMeta({ layout: "custom" });
const { getPostDataDetail, updatePostData } = usePostStore();
const route = useRoute();
const { data } = await useAsyncData("post", () =>
  getPostDataDetail(route.params.id.toString())
);
</script>
