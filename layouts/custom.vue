<template>
  <div>
    <div class="flex">
      <Sidebar />
      <div
        class="w-full md:ml-[4rem]"
        :class="isSidebarActive ? 'hidden' : 'block'"
      >
        <NavHeader />
        <div class="p-8">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { isSidebarActive } = storeToRefs(useSidebarStore());
</script>
