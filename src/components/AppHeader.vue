<template>
  <header class="header-container"
          :class="'theme' + '-' + theme">
    <div class="header-content">
      <h1 class="header-title">bomb games portal</h1>
      <nav class="header-navbar">
        <ul class="header-navbar-list">
          <li v-for="item in links"
              :key="item.id">
            <router-link class="header-navbar-list-item"
                         :to="item.url"
                         active-class="active-link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <base-button class="header-switch"
                   @click="$emit('switch')">
        {{ theme }}
      </base-button>
      <app-search-select-form></app-search-select-form>
      <form @submit.prevent
            class="header-form">
        <input class="header-form-input"
                    type="search"
                    placeholder="Enter game"
                    v-model="title"
                    required
        />
        <img class="header-form-btn"
             src="../assets/img/search.svg"
             alt="search"
             type="button"
             @click="findCurrent"/>
      </form>
      <div class="header-error"
          v-if="error ==='not found'">
        {{ error }}
      </div>
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
      links: [
          { id:1, name:'top games', url:'/'},
          { id:2, name:'news', url:'/news'},
          { id:3, name:'giveaways', url:'/giveaways'},
          { id:4, name:'contacts', url:'/contacts'},
      ],
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

    findCurrent() {
      if (this.title) {
        let current = this.currentGame(this.title)
        if (current) {
          this.setCurrent(current)
          this.title = ''
          this.$router.push(`/${current.id}`)
        } else {
          this.setError('not found')
          this.title = ''
          setTimeout(() => {
            this.setError(null)
          }, 3000)
        }
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
  @apply grid grid-cols-[1fr_3fr_1fr] px-10 relative
  items-center justify-center scale-90 xxs:scale-100;
}

.header-title {
  @apply uppercase text-base xxs:text-2xl;
  text-align: center;
}

.header-navbar {
  @apply row-span-2;
}

.header-navbar-list {
  @apply flex flex-col items-center
  mid:flex-row md:justify-evenly row-span-2 h-full items-end;
  text-align:center;
}

.header-navbar-list-item {
  @apply capitalize hover:underline;
}

.active-link {
  @apply font-bold;
}

.header-form {
  @apply base_container gap-1 text-black relative opacity-0 xxs:opacity-100;
  grid-column-start:3;
  width:100px;
}

.header-form-input {
  @apply w-full rounded-md p-1 text-sm
  placeholder:text-xs placeholder:p-1 placeholder:italic
  focus:outline focus:outline-teal-400 focus:outline-2 focus:outline-offset-1 z-0;
  height: 30px;
}

.header-form-btn {
  @apply absolute -right-6 cursor-pointer invert
  hover:scale-110 transition;
  width:20px;
}

.header-switch {
  @apply opacity-0 xxs:opacity-100;
  width:120px;
}

.header-error {
  @apply text-red-600 capitalize font-bold
  absolute -bottom-5;
  left:50%;
}

</style>