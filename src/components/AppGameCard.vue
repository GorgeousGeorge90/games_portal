<template>
  <section class="card-container">
    <div v-if="current" class ="card-content">
      <div class="card-main">
        <h3>{{ current.title }}</h3>
        <img :src="current.thumbnail" alt='main'>
        <p>{{ current.short_description }}</p>
      </div>
      <ul class="card-list">
        <li class="card-list-item"
            v-for="item in current.screenshots"
            :key="item.id">
          <img :src="item.image" alt='screenshot'>
        </li>
      </ul>
    </div>
    <div v-else>
      Loading...
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppGameCard",

  computed: {
    ...mapState({
      current:state => state.currentGame,
    })
  },
}

</script>

<style scoped>

.card-container {
  @apply base_container;
}

.card-content {
  @apply base_container flex-col;
}

.card-main {
  @apply base_container flex-col;
}

.card-list {
  @apply grid grid-cols-3 gap-3;
}

.card-list-item {
  max-width:250px;
  max-height: 200px;
}

</style>