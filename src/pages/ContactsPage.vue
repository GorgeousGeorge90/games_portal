<template>
  <div class="contacts-container">
    <div class="contacts-content">
      <app-about></app-about>
      <app-socials></app-socials>
      <app-comment-form></app-comment-form>
      <app-comments></app-comments>
    </div>
  </div>
</template>

<script>
import AppAbout from '@/components/AppAbout';
import AppComments from '@/components/AppCommentsList';
import AppCommentForm from "@/components/AppCommentForm";
import AppSocials from "@/components/AppSocials";

export default {
  name: "ContactsPage",
  components: {
    AppSocials,
    AppCommentForm,
    AppComments,
    AppAbout
  },
}

</script>

<style scoped>

.contacts-container {
  @apply base_container;
}

.contacts-content {
  @apply base_container flex-col gap-4;
}

</style>