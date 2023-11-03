<template>
    <section v-if="!isSearch"
             class="search-select-container">
      <base-button @click="switchSearch">
        custom search
      </base-button>
    </section>
    <section v-else class="search-select-container">
      <div class="search-select-content">
        <form class="search-select-form"
              @submit.prevent>
          <base-select id="platform"
                       :options="platform"
                       v-model="option.platform"
          >platform
          </base-select>
          <base-select id="category"
                       :options="category"
                       v-model="option.category"
          >category
          </base-select>
          <base-select id="sorting"
                       :options="sort"
                       v-model="option.sort"
          >sort
          </base-select>
        </form>
      </div>
    </section>
</template>

<script>

import { mapActions } from "vuex";
import BaseSelect from "@/UI/BaseSelect";
import BaseButton from "@/UI/BaseButton";


export default {
  name: "AppSearchSelectForm",
  data() {
    return {
      platform: ["pc", "browser", "all"],
      category: ["shooter", "strategy", "sports", "mmo"],
      sort: ["alphabetical", "release-date"],
      option: {
        platform: "",
        category: "",
        sort: "",
      },
      isSearch:false,
    }
  },

  updated() {
    if (this.option.platform && this.option.sort && this.option.category) {
      this.getSortedFilms()
      this.switchSearch()
    }
  },

  components: {
    BaseButton,
    BaseSelect,
  },

  methods: {
    ...mapActions({
      getGames: 'fetchSortedGames',
    }),
    getSortedFilms() {
      this.getGames(this.option)
      this.option.platform = ""
      this.option.category = ""
      this.option.sort = ""
    },
    switchSearch() {
      this.isSearch = !this.isSearch
    }
  },
}

</script>

<style scoped>

.search-select-container {
  @apply base_container;
  width: 300px;
  height:50px;
}

.search-select-content {
  @apply base_container;
}

.search-select-form {
  @apply base_container gap-2;
}

</style>