<template>
  <section class="give-container">
    <div class="give-content">
      <ul class="give-list">
        <li class="give-list-item"
            v-for="item in giveaways"
            :key="item.id"
        >
          <img :src="item.thumbnail" alt="logo">
          <h3>{{ item.title }}</h3>
          <p v-if="item.keys_left">{{ item.keys_left.slice(0,item.keys_left.length) }}</p>
          <a :href="item.giveaways_url">{{ item.giveaways_url }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "AppGiveawaysList",

  computed: {
    ...mapState({
      giveaways:state => state.giveaways
    })
  }
}
</script>

<style scoped>

.give-container {
  @apply base_container;
}

.give-content {
  @apply base_container;
}

.give-list {
  @apply base_container flex-col;
}

.give-list-item {
  @apply base_container;
}

</style>