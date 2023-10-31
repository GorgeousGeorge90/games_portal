<template>
  <div class="give-page-container">
    <div class="give-page-content">
      <h2 class="give-page-title">top giveaways</h2>
      <app-giveaways-list></app-giveaways-list>
    </div>
  </div>
</template>

<script>
import AppGiveawaysList from '@/components/AppGiveawaysList';

export default {
  name: "GiveawaysPage",

  components: {
    AppGiveawaysList,
  }
}
</script>

<style scoped>

.give-page-container {
  @apply base_container;
}

.give-page-content {
  @apply base_container flex-col gap-2;
}

.give-page-title {
  @apply capitalize text-2xl text-white;
}

</style>