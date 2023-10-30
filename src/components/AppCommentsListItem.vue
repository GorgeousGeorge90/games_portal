<template>
  <section class="comment-container">
    <div class="comment-content"
         v-if="comment">
      <div class="comment-info">
        <p>{{ comment.name }}</p>
        <p>{{ comment.comment }}</p>
        <base-button @click="$store.dispatch('deleteComment', comment.id)">
          x
        </base-button>
      </div>
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

.comment-info {
  @apply grid grid-rows-3 items-center justify-center bg-neutral-400 p-1 rounded-lg;
  width: 150px;
  height: 150px;
}

</style>