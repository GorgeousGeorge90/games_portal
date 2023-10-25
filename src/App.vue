<template>
  <div class="app-wrapper">
    <div class="app-content">
      <app-header></app-header>
      <main class="app-main">
        <app-form></app-form>
      </main>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import AppForm from "@/components/AppForm";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppForm,
    AppFooter,
  }
}
</script>

<style>
.app-wrapper {
  @apply base_container;
  height: 100vh;
  width: 100vw;
}

.app-content {
  @apply base_container flex-col;
  width: 100%;
  height: 100%;
}

.app-main {
  flex-grow: 1;
}

</style>
