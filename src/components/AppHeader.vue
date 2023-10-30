<template>
  <header class="header-container">
    <div class="header-content">
      <h1 class="header-title">bomb games portal</h1>
      <nav class="header-navbar">
        <button class="header-navbar-item"
                @click="$router.push('/')"
        >top games</button>
        <button class="header-navbar-item"
                @click="$router.push('/news')"
        >news</button>
        <button class="header-navbar-item"
                @click="$router.push('/giveaways')"
        >giveaways</button>
        <button class="header-navbar-item"
                @click="$router.push('/contacts')"
        >contacts</button>
      </nav>
      <button @click="$emit('switch')">
        switch
      </button>
      <form class="header-form"
            @submit.prevent>
        <input type="search"
               v-model="title"
               aria-label="search"
               required>
        <base-button @click="findCurrent(title)">search</base-button>
      </form>
    </div>
    <div v-if="error === 'not found!'">{{ error }}</div>
  </header>
</template>

<script>

import {mapGetters, mapMutations, mapState} from 'vuex';
import BaseButton from "@/UI/BaseButton";


export default {
  name: "AppHeader",
  data() {
    return {
      title:''
    }
  },
  components: {BaseButton},

  computed: {
    ...mapState({
      error:state => state.error,
    }),
    ...mapGetters({
      currentGame:'findCurrent',
    }),
  },

  methods: {
    switchTheme() {
      this.$emit('switch')
    },

    ...mapMutations({
      setCurrent:'SET_CURRENT',
      setError:'SET_ERROR',
    }),

    findCurrent(title) {
      let current = this.currentGame(title)
      if (current) {
        this.setCurrent(current)
        this.title = ''
        this.$router.push(`/${current.id}`)
      } else {
        this.setError('not found')
        this.title = ''
        setTimeout(()=> {
          this.setError(null)
        },3000)
      }
    }
  }
}
</script>

<style>

.header-container {
  @apply base_container w-full bg-neutral-900 text-white;
  height: 200px;
}

.header-content {
  @apply grid grid-cols-[1fr_3fr];
}

.header-title {
  @apply uppercase text-2xl;
}

.header-navbar {
  @apply base_container justify-evenly;
}

.header-navbar-item {
  @apply capitalize hover:underline transition-all;
}

.header-form {
  @apply base_container gap-1 flex-col text-black;
}

input {
  @apply rounded-md;
  min-height: 30px;
}

</style>