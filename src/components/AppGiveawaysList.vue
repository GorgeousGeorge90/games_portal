<template>
  <section class="give-container">
    <div class="give-content">
      <ul class="give-list">
        <li class="give-list-el"
            v-for="item in giveaways"
            :key="item.id"
        >
         <app-giveaways-list-item :id="item.id"
                                  :title="item.title"
                                  :thumbnail="item.thumbnail"
                                  :keys_left="item.keys_left"
                                  :giveaway_url="item.giveaway_url"
         ></app-giveaways-list-item>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import AppGiveawaysListItem from "@/components/AppGiveawaysListItem";

export default {
  name: "AppGiveawaysList",
  components: {
    AppGiveawaysListItem
  },
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
  @apply grid grid-cols-1 gap-5 xs:grid-cols-2
  md:grid-cols-3;
  animation: 0.7s go-in ease;
}

@keyframes go-in {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  50% {
    opacity: 1;
    transform: translateY(150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>