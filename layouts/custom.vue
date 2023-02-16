<template>
  <div>
    <div class="flex">
      <Sidebar />
      <div class="w-full md:ml-[4rem]">
        <NavHeader />
        <div class="p-8">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
