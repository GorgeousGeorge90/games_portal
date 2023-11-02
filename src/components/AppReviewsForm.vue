<template>
  <section class="form-container">
    <div class="form-content">
      <form class="form-info"
            @submit.prevent
            @submit="addReview">
        <label for="review">leave review</label>
        <div class="form-info-main">
        <textarea class="form-info-main-textarea"
                  v-model="review.review"
                  type="text"
                  id="review"
                  placeholder="Enter review..."
                  aria-details="review"
                  required
        />
          <input class="form-info-main-input"
                 v-model="review.name"
                 type="text"
                 id="name"
                 placeholder="Enter name..."
                 required
          />
          <base-button>add review</base-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/UI/BaseButton';
import { mapActions, mapState } from 'vuex';

export default {
  name: "AppReviewsForm",
  data() {
    return {
      review: {
        review:"",
        name:"",
      },
    }
  },
  components: {
    BaseButton
  },

  computed: {
    ...mapState({
      reviews:state => state.reviews,
    })
  },

  methods: {
    ...mapActions({
      add:'addReview',
    }),

    addReview() {
      this.add(this.review)
      this.review.review = ""
      this.review.name = ""
    }
  }
}
</script>

<style scoped>

.form-container {
  @apply base_container;
}

.form-content {
  @apply base_container flex-col gap-2;
}

.form-info {
  @apply base_container flex-col gap-1 text-white
  capitalize;
}

.form-info-main {
  @apply grid grid-rows-[60px_40px] grid-cols-2 gap-1;
  width: 200px;
}

.form-info-main-textarea {
  @apply text-black rounded-md bg-neutral-300 text-sm p-1
  placeholder:text-sm col-span-2;
  height: 60px;
  resize:none;
}

.form-info-main-textarea:focus,.form-info-main-input:focus {
  @apply outline-1 outline-violet-500 outline-offset-2;
}

.form-info-main-input {
  @apply text-black rounded-md bg-neutral-300 text-sm p-1
  placeholder:text-sm;
}




</style>