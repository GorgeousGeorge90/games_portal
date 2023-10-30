<template>
  <div class="app-wrapper">
    <div class="app-content" :class="theme">
      <app-header @switch="switchTheme"></app-header>
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
  data() {
    return {
      theme:'dark',
    }
  },

  created() {
    this.fetchPosts()
    this.fetchNews()
    this.fetchGiveaways()
    this.fetchComments()
  },

  methods: {
    ...mapActions({
      fetchPosts: 'fetchGames',
      fetchNews: 'fetchNews',
      fetchGiveaways: 'fetchGiveaways',
      fetchComments: 'fetchComments',
    }),

    switchTheme() {
      if (this.theme === "dark") {
        this.theme = "light"
      } else {
        this.theme = "dark"
      }
    }
  },

  computed: {
    ...mapState({
      games:state => state.games,
      current:state => state.currentGame,
      status:state => state.status,
      comments:state => state.comments,
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
  @apply base_container w-screen min-h-screen;
}

.app-content {
  @apply flex flex-col w-full h-full min-h-screen
  bg-neutral-800;
}

.dark {
  @apply bg-neutral-800;
}

.light {
  @apply bg-neutral-500;
}

.app-main {
  @apply base_container p-10;
}

</style>
