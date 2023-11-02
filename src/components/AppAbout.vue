<template>
  <section class="about-container">
    <div class="about-content">
        <h3 class="about-title">about</h3>
        <p class="about-text">
          Hello! Nice to meet you! My name is Egor and I am Junior Frontend Developer!
          This small project was created by Vue 3 with TailwindCSS!
        </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppAbout"
}
</script>

<style scoped>

.about-container {
  @apply base_container text-white;
  max-width: 800px;
}

.about-content {
  @apply base_container flex-col gap-4;
  text-align: center;
}

.about-title {
  @apply capitalize text-xl;
}

</style>