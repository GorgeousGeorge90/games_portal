<template>
  <section class="games-list-container">
    <ul class="games-list-content"
        v-if="status !== 'pending'"
    >
      <li class="games-list-item"
          v-for="game in games"
          :key="game.id"
          @click="select(game.id)"
      >
        <app-games-list-item :id="game.id"
                          :title="game.title"
                          :thumbnail="game.thumbnail"
                          :release_date="game.release_date"
                          @click="$router.push(`/${game.id}`)"
        ></app-games-list-item>
      </li>
    </ul>
    <div v-else>
      <img src="../assets/img/spinner.svg" alt="preloader">
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import AppGamesListItem from "@/components/AppGamesListItem";

export default {
  name: "AppGamesList",

  computed: {
    ...mapGetters({
      games:'getGames',
    }),
    ...mapState({
      status:state => state.status,
    }),
  },

  methods: {
    ...mapActions({
      select:'fetchCurrentGame',
    })
  },

  components: {
    AppGamesListItem
  }
}
</script>

<style scoped>

.games-list-container {
  @apply base_container;
  animation:1s go ease-in-out;
}

.games-list-content {
  @apply grid  gap-8
  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4;
}


@keyframes go {
  0% { opacity: 0; transform:translateX(-200px) }
  100% { opacity: 1;  transform:translateX(0) }
}

</style>