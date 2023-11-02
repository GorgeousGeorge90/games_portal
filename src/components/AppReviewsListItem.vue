<template>
  <section class="review-container">
    <div class="review-content"
         v-if="review">
      <div class="review-info">
        <p class="review-info-main"
        >{{ review.review }}</p>
        <div class="review-info-data">
        <p class="review-info-data-name">{{ review.name }}</p>
        <base-button @click="$store.dispatch('deleteReview', review.id)">
          x
        </base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/UI/BaseButton";

export default {
  name: "AppReviewsListItem",
  components: {
    BaseButton
  },
  props: {
    review: {
      id: Number,
      review: String,
      name: String,
    }
  },
}
</script>

<style scoped>

.review-container {
  @apply base_container w-full h-full rounded-md
  bg-neutral-100 p-2;
  width:200px;
}

.review-content {
  @apply base_container p-1 w-full h-full;
}

.review-info {
  @apply flex justify-center flex-col w-full text-sm;
}

.review-info-data {
  @apply flex items-center justify-end w-full gap-1;
}

.review-info-data-name {
  @apply text-xs italic;
}



</style>