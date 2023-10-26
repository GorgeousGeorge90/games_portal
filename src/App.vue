<template>
  <div class="app-wrapper">
    <div class="app-content">
      <app-header></app-header>
      <main class="app-main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'App',

  created() {
    this.fetchPosts()
    this.fetchNews()
  },

  methods: {
    ...mapActions({
      fetchPosts:'fetchGames',
      fetchNews:'fetchNews',
    })
  },

  computed: {
    ...mapState({
      games:state => state.games,
      current:state => state.currentGame,
      status:state => state.status,
    }),

    ...mapGetters({
      currentGames:'getGames',
    })
  },

  components: {
    AppHeader,
  }
}
</script>

<style scoped>
.app-wrapper {
  @apply base_container w-screen h-screen;
}

.app-content {
  @apply flex flex-col w-full h-full gap-10;
}

.app-main {
  @apply base_container px-10;
}

</style>
