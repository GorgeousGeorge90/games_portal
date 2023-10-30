<template>
  <section class="social-container">
    <div class="social-content">
      <h2 class="social-title">socials</h2>
      <ul class="social-list">
        <li>VK</li>
        <li>Telegram</li>
        <li>GitHub</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppContacts"
}
</script>

<style scoped>

.social-container {
  @apply base_container;
}

.social-content {
  @apply base_container flex-col gap-4;
}

.social-title {
  @apply capitalize text-xl;
}

.social-list {
  @apply flex justify-evenly;
  width: 600px;
}

</style>