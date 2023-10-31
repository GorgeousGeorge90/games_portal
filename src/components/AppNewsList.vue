<template>
  <section class="news-container">
    <div class="news-content">
      <ul class="news-pagination">
        <li class="news-pagination-item"
            v-for="page in news.length / this.limit"
            :key="page"
            :class="page === currentPage ? 'active':null"
            @click="setCurrentPage(page)"
        >
          {{ page }}
        </li>
      </ul>
      <ul class="news-list">
        <li class="news-list-item"
            v-for="item in getCurrentNews"
            :key="item.id">
          <a :href="item.article_url"
              target="_blank">
          <img class="news-list-item-img"
              :src="item.thumbnail"
              alt='news'>
          </a>
          <div class="news-main">
            <h3 class="news-main-title">{{ item.title }}</h3>
            <p class="news-main-text">{{ item.short_description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "AppNewsList",
  data() {
    return {
      currentPage:1,
      limit:5,
    }
  },

  computed: {
    ...mapState({
      news:state => state.news,
    }),

    getCurrentNews() {
      if (this.currentPage === 1) {
        return this.news.filter((item, i) => i < (this.currentPage * this.limit))
      } else {
        return this.news.filter((item, i) => i >= ((this.currentPage - 1) * this.limit)
            && i < (this.currentPage * this.limit))
      }
    }
  },

  methods: {
    setCurrentPage(currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>

<style scoped>

.news-container {
  @apply base_container text-white;
  animation: 0.5s show-on ease-in;
}

.news-content {
  @apply base_container flex-col gap-2;
}

.news-pagination {
  @apply base_container gap-2;
}

.news-pagination-item {
  @apply base_container h-8 w-8 hover:bg-teal-500 hover:text-white cursor-pointer transition
  bg-white text-black rounded-md;
}

.active {
  @apply bg-black text-white;
}

.news-list {
  @apply grid xs:grid-cols-4 xs:gap-1 grid-cols-3 gap-2
  sm:base_container sm:flex-col sm:items-start sm:gap-4;
}

.news-list-item {
  @apply base_container gap-4;
}

.news-list-item-img {
  @apply rounded-xl cursor-pointer box-border
  hover:scale-105 hover:outline hover:outline-2 hover:outline-teal-400
  hover:outline-offset-1 transition;
  max-height: 100px;
  max-width: 100px;
}

.news-main {
  @apply hidden sm:block;
}

.news-main-title {
  @apply font-semibold;
}

.news-main-text {
  @apply italic;
}

@keyframes show-on {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>