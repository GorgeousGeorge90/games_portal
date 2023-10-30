<template>
  <section class="form-container">
    <div class="form-content">
      <h2 class="form-title">comments</h2>
      <form class="form-info"
            @submit.prevent
            @submit="addComment">
        <base-input v-model="comment.name"
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    name="name"></base-input>
        <base-input v-model="comment.comment"
                    type="text"
                    id="comment"
                    placeholder="Enter comment"
                    name="comment"></base-input>
        <base-button>add comment</base-button>
      </form>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/UI/BaseButton';
import {mapActions} from "vuex";
import BaseInput from "@/UI/BaseInput";


export default {
  name: "AppCommentForm",
  data() {
    return {
      comment: {
        name: '',
        comment: ''
      }
    }
  },
  components: {
    BaseInput,
    BaseButton
  },
  methods: {
    ...mapActions({
      add:'addComment',
    }),

    addComment() {
      this.add(this.comment)
      this.name = ''
      this.comment = ''
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

.form-title {
  @apply capitalize text-xl;
}

.form-info {
  @apply base_container;
}

.form-info {
  @apply  gap-1;
}


</style>