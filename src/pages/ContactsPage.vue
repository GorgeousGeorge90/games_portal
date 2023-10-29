<template>
  <section class="contacts-container">
    <div class="contacts-content">
      <h1 class="contacts-title">inform block</h1>
      <app-about></app-about>
      <app-comment-form></app-comment-form>
      <app-comments></app-comments>
    </div>
  </section>
</template>

<script>
import AppAbout from '@/components/AppAbout';
import AppComments from '@/components/AppCommentsList';
import AppCommentForm from "@/components/AppCommentForm";

export default {
  name: "ContactsPage",
  components: {
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
  @apply base_container flex-col;
}

.contacts-form {

}

</style>