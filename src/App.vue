<template>
  <div class="app-wrapper">
    <div class="app-content" :class="theme">
      <app-header @switch="switchTheme"
                  :theme="theme"
      ></app-header>
      <main class="app-main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import { mapActions, mapGetters } from 'vuex';

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
    this.fetchReviews()
  },

  mounted() {
    this.$router.push('/');
  },

  methods: {
    ...mapActions({
      fetchPosts: 'fetchGames',
      fetchNews: 'fetchNews',
      fetchGiveaways: 'fetchGiveaways',
      fetchReviews: 'fetchReviews',
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
