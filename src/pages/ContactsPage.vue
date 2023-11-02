<template>
  <div class="contacts-container">
    <div class="contacts-content">
      <h2 class="contacts-title">contacts</h2>
      <div class="contacts-main">
        <app-about></app-about>
        <app-socials></app-socials>
        <app-reviews-form></app-reviews-form>
        <app-reviews-list></app-reviews-list>
      </div>
    </div>
  </div>
</template>

<script>
import AppAbout from '@/components/AppAbout';
import AppSocials from '@/components/AppSocials';
import AppReviewsForm from '@/components/AppReviewsForm';
import AppReviewsList from '@/components/AppReviewsList';

export default {
  name: "ContactsPage",
  components: {
    AppSocials,
    AppReviewsForm,
    AppReviewsList,
    AppAbout
  },
}

</script>

<style scoped>

.contacts-container {
  @apply base_container;
}

.contacts-content {
  @apply base_container flex-col gap-4 px-10;
}

.contacts-title {
  @apply text-2xl text-white capitalize;
}

.contacts-main {
  @apply xxs:grid xxs:grid-cols-2 gap-5
  xxs:grid-rows-[200px_1fr] xxs:justify-start xxs:items-center
  flex flex-col;
}

</style>