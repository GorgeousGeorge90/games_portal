<template>
  <header class="header-container">
    <div class="header-content">
      Header
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
  .header-container {
    @apply base_container w-full bg-black text-white;
    height: 50px;
  }

  .header-content {
    @apply base_container;
  }

</style>