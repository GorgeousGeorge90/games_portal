<template>
  <form @submit.prevent
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

</style>