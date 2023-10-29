<template>
  <section class="about-container">
    <div class="about-content">
      <section>
        <h3>About me</h3>
        <p>
          Hello! Nice to meet you! My name is Egor and I am Junior Frontend Developer!
          This small project was created by Vue 3 with TailwindCSS!
        </p>
      </section>
      <section>
        <h3>My socials</h3>
        <p>

        </p>
      </section>
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
  @apply base_container;
  max-width: 800px;
}

.about-content {
  @apply base_container flex-col w-full px-10;
}

</style>