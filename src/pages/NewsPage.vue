<template>
  <div class="news-page-container">
    <div class="news-page-content">
      <h2 class="news-page-title">games news</h2>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppNewsList from "@/components/AppNewsList";

export default {
  name: "NewsPage",
  components: {
    AppNewsList
  }
}
</script>

<style scoped>

.news-page-container {
  @apply base_container;
}

.news-page-content {
  @apply base_container flex-col gap-5;
  max-width: 800px;
}

.news-page-title {
  @apply capitalize text-2xl text-white;
}

@media (max-width: 600px) {
  .news-page-content {
    max-width: 580px;
  }
}

</style>