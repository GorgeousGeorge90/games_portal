<template>
  <section class="comments-list-container">
    <div class="comments-list-content">
      <ul class="comments-list-list"
          v-if="comments.length !== 0">
        <li v-for="comment in comments" :key="comment.id">
           <app-comments-list-item :comment="comment"></app-comments-list-item>
        </li>
      </ul>
      <p v-else>There is no comments!</p>
    </div>
  </section>
</template>

<script>

import AppCommentsListItem from '@/components/AppCommentsListItem';
import { mapGetters } from 'vuex';
export default {
  name: "AppCommentsList",
  components: {
    AppCommentsListItem
  },

  computed: {
    ...mapGetters({
      comments: 'getComments'
    })
  }
}
</script>

<style scoped>

.comments-list-container {
  @apply base_container;
}

.comments-list-content {
  @apply base_container;
}

.comments-list-list {
  @apply grid grid-cols-5 gap-2;
}


</style>