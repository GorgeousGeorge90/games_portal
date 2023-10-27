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
                @click="$router.push('/giveaways')"
        >giveaways</button>
        <button class="header-navbar-item"
                @click="$router.push('/contacts')"
        >contacts</button>
      </nav>
      <button @click="$emit('switch')">
        switch
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",

  methods: {
    switchTheme() {
      this.$emit('switch')
    }
  }
}
</script>

<style>


.header-container {
  @apply base_container w-full bg-neutral-900 text-white;
  min-height: 100px;
}

.header-content {
  @apply grid grid-cols-[1fr_3fr];
}

.header-title {
  @apply uppercase text-2xl;
}

.header-navbar {
  @apply base_container justify-evenly;
}

.header-navbar-item {
  @apply capitalize hover:underline transition-all;
}

</style>