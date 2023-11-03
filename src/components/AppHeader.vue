<template>
  <header class="header-container"
          :class="'theme' + '-' + theme">
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
      <base-button class="header-switch"
              @click="$emit('switch')">
        {{ theme }}
      </base-button>
      <app-search-select-form></app-search-select-form>
    </div>
  </header>
</template>

<script>

import { mapGetters, mapMutations, mapState } from 'vuex';
import AppSearchSelectForm from '@/components/AppSearchSelectForm';
import BaseButton from "@/UI/BaseButton";


export default {
  name: "AppHeader",
  data() {
    return {
      title:''
    }
  },

  props: {
    theme:String,
  },

  components: {
    BaseButton,
    AppSearchSelectForm,
  },

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
  @apply base_container w-full text-white;
  height: 150px;
}

.theme-light {
  @apply bg-neutral-700;
}

.theme-dark {
  @apply bg-neutral-900;
}

.header-content {
  @apply grid grid-cols-[1fr_3fr_1fr] px-10 items-center justify-center;
}

.header-title {
  @apply uppercase text-2xl;
  text-align: center;
}

.header-navbar {
  @apply flex flex-col items-center
  md:flex-row md:justify-evenly row-span-2 h-full items-end;
}

.header-navbar-item {
  @apply capitalize hover:underline transition-all;
}

.header-form {
  @apply base_container gap-1 flex-col text-black;
}

.header-switch {
  width: 100px;
}


input {
  @apply rounded-md;
  min-height: 30px;
}

</style>