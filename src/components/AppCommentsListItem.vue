<template>
  <section class="comment-container">
    <div class="comment-content"
         v-if="comment">
      <p>{{ comment.name }}:{{ comment.comment }}</p>
      <base-button @click="$store.dispatch('deleteComment', comment.id)">x</base-button>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/UI/BaseButton";

export default {
  name: "AppCommentsListItem",
  components: {
    BaseButton
  },
  props: {
    comment: {
      type:Object,
    }
  },
}
</script>

<style scoped>

.comment-container {
  @apply base_container;
}

.comment-content {
  @apply base_container;
}

</style>