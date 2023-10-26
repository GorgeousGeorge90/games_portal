<template>
  <section class="news-container">
    <div class="news-content">
      <ul class="news-list">
        <li class="news-list-item"
            v-for="item in news"
            :key="item.id">
          <img class="news-list-item-img"
              :src="item.thumbnail"
              alt='news'>
          <div class="news-main">
            <h3>{{ item.title }}</h3>
            <p>{{ item.short_description }}</p>
            <p><a :href="item.article_url">{{ item.article_url }}</a></p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "AppNews",

  computed: {
    ...mapState({
      news:state => state.news,
    })
  }
}
</script>

<style scoped>

.news-container {
  @apply base_container;
}

.news-content {
  @apply base_container;
}

.news-list {
  @apply base_container items-start flex-col gap-5;
}

.news-list-item {
  @apply base_container gap-2;
}

.news-list-item-img {
  @apply rounded-xl;
  max-height: 100px;
  max-width: 100px;
}

</style>