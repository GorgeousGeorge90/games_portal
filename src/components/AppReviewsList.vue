<template>
  <section class="reviews-list-container">
    <div class="reviews-list-content">
      <TransitionGroup class="reviews-list-list"
                       tag="ul"
                       name="list"
                       v-if="reviews.length !== 0">
        <li v-for="review in reviews" :key="review.id">
           <app-reviews-list-item :review="review"
                                  :name="name"
           ></app-reviews-list-item>
        </li>
      </TransitionGroup>
      <p v-else>There is no reviews!</p>
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex';
import AppReviewsListItem from '@/components/AppReviewsListItem';

export default {
  name: "AppReviewsList",
  components: {
    AppReviewsListItem,
  },

  computed: {
    ...mapGetters({
      reviews: 'getReviews'
    })
  }
}
</script>

<style scoped>

.reviews-list-container {
  @apply base_container;
}

.reviews-list-content {
  @apply base_container;
}

.reviews-list-list {
  @apply grid grid-rows-3 gap-2;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


</style>