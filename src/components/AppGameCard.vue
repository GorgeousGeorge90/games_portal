<template>
  <section class="card-container">
    <div v-if="current" class="card-content">
      <div class="card-main">
        <a :href="current.game_url"
           target="_blank">
          <img class="card-main-img"
               :src="current.thumbnail"
               alt='main'>
        </a>
        <div class="card-main-info">
          <h3>{{ current.title }}</h3>
          <p>{{ current.short_description }}</p>
          <div class="card-main-info-additional">
            <p>genre: {{ current.genre }}</p>
            <p v-if="current.developer !== current.publisher">developer: {{ current.developer }}</p>
            <p>publisher: {{ current.publisher }}</p>
            <p>platform: {{ current.platform }}</p>
          </div>
        </div>
      </div>
      <ul class="card-list">
        <li class="card-list-item"
            v-for="item in current.screenshots.slice(0,3)"
            :key="item.id">
          <img :src="item.image" alt='screenshot'>
        </li>
      </ul>
    </div>
    <div v-else>
      <img src="../assets/img/spinner.svg" alt="loading"/>
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
  @apply base_container flex-col gap-3
  text-white;
  font-size: 0.8em;
}

.card-main {
  @apply base_container flex-col md:flex-row
  items-start gap-3;
}

.card-main-img {
  @apply row-span-2;
}

.card-main-info {
  @apply base_container flex-col;
  width: 400px;
}

.card-main-info-additional {
  @apply flex flex-col items-start w-full;
}

.card-list {
  @apply grid grid-rows-3 md:grid-cols-3 gap-3;
}

.card-list-item {
  display: flex;
  max-width:250px;
  max-height: 200px;
}

h3 {
  font-weight: bold;
  font-size: larger;
}

img {
  border-radius: 8px;
}

a:hover {
  @apply outline outline-2 rounded-md outline-teal-400
  outline-offset-1;
}

</style>