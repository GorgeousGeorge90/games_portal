<template v-if="games">
  <section class="games-list-container">
    <ul class="games-list-content">
      <li class="games-list-item"
          v-for="game in games"
          :key="game.id"
          @click="select(game.id)"
      >
        <AppGamesListItem :id="game.id"
                          :title="game.title"
                          :thumbnail="game.thumbnail"
                          :release_data="game.release_date"
                          @click="$router.push(`/${game.id}`)"
        />
      </li>
    </ul>
  </section>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import AppGamesListItem from "@/components/AppGamesListItem";


export default {
  name: "AppGamesList",

  computed: {
    ...mapGetters({
      games:'getGames',
    })
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
}

.games-list-content {
  @apply grid  gap-8
  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4;
}


</style>