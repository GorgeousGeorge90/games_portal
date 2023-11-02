<template>
  <section class="social-container">
    <div class="social-content">
      <h3 class="social-title">socials</h3>
      <ul class="social-list">
        <li class="social-list-item">
          <a href="https://vk.com/gorgeous_george90"
             target="_blank"
          >
            <img class="social-list-item-img"
                 src="../assets/img/vk2.svg" alt="vk"/>
          </a>
        </li>
        <li class="social-list-item">
          <a href="https://t.me/MrStandart90"
             target="_blank">
            <img class="social-list-item-img"
                 src="../assets/img/tg2.svg" alt="tg"/>
          </a>
        </li>
        <li class="social-list-item">
          <a href="https://github.com/GorgeousGeorge90"
             target="_blank"
          >
            <img class="social-list-item-img"
                 src="../assets/img/gh2.svg" alt="gh"/>
          </a>
        </li>
      </ul>
      <ul>
        <li>email:doroshinegorm@gmail.com</li>
        <li>phone:+7(985)-048-88-56</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppContacts",
}
</script>

<style scoped>

.social-container {
  @apply base_container text-white;
}

.social-content {
  @apply base_container flex-col gap-4;
}

.social-title {
  @apply capitalize text-xl;
}

.social-list {
  @apply flex justify-center;
  max-width: 600px;
}

.social-list-item-img {
  @apply invert hover:invert-0;
}

</style>