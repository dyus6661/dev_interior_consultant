<template>
  <div>
    <header
      class="
        w-full
        px-4
        py-2
        h-16
        max-w-7xl
        mx-auto
        flex-none flex
        justify-between
        items-center
      "
    >
      <NuxtLink to="/">Home</NuxtLink>
      <div class="flex flex-auto justify-end">
        <NuxtLink class="btn hover:bg-blue-400 hover:text-white" to="/about"
          >About</NuxtLink
        >
        <NuxtLink class="btn ml-4" to="/contact">Contact</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>
