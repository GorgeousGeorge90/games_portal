<template>
  <footer class="footer-container">
    <div class="footer-content">
      Footer
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
.footer-container {
  @apply base_container bg-black text-white w-full;
  height: 50px;
}

.footer-content {
  @apply base_container w-full;
}
</style>