<template>
  <div class="game-item-container"
       @mouseover="hover = true"
       @mouseleave="hover = false">
    <div class="game-item-content">
      <figure class="game-item-card">
        <img :src="thumbnail" alt='pic'>
        <figcaption class="game-item-card-title"
                    v-if="!hover">{{ title }}</figcaption>
        <figcaption class="game-item-card-title"
                    v-else>release:{{ release_date }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>

export default {
  name: "AppGamesListItem",
  data() {
    return {
      hover:false,
    }
  },
  props: {
    id:Number,
    title:String,
    thumbnail:String,
    release_date:String,
  },
}
</script>

<style scoped>
.game-item-container {
  @apply base_container;
}

.game-item-content {
  @apply base_container;
}

.game-item-card {
  @apply relative cursor-pointer transition
  hover:scale-110 hover:capitalize;
}

.game-item-card-title {
  @apply base_container absolute bottom-0 w-full text-white py-2
  bg-black bg-opacity-50 font-serif;
}

img {
  @apply object-fill;
}

</style>