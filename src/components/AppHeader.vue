<template>
  <header class="header-container">
    <div class="header-content">
      <h1 class="header-title">bomb games portal</h1>
      <nav class="header-navbar">
        <button class="header-navbar-item"
                @click="$router.push('/')"
        >top games</button>
        <button class="header-navbar-item"
                @click="$router.push('/news')"
        >news</button>
        <button class="header-navbar-item"
                @click="$router.push('/contacts')"
        >contats</button>
      </nav>
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
  height: 100px;
}

.header-content {
  @apply grid grid-cols-[1fr_3fr];
}

.header-title {
  @apply uppercase text-2xl;
}

.header-navbar {
  @apply base_container gap-2;
}

.header-navbar-item {
  @apply capitalize hover:text-orange-500;
}

</style>