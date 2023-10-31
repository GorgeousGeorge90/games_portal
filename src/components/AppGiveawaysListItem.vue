<template>
  <div class="give-item-container"
       @mouseover="hover = true"
       @mouseleave="hover = false">
    <div class="give-item-content">
      <img v-if="!hover"
          :src="thumbnail" alt="logo">
      <a :href="giveaway_url"
         target="_blank">
      <div v-if="hover"
          class="give-item-info">
        <h3>{{ title }}</h3>
        <div class="give-item-info-progress">
          <label for="progress">Keys left:{{ keys_left }}</label>
          <progress max="100"
                    id="progress"
                    :value="getProgress">
          </progress>
        </div>
      </div>
      </a>
    </div>
  </div>
</template>

<script>


export default {
  name: "AppGiveawaysListItem",
  data() {
    return {
      hover:false,
    }
  },

  props: {
    title: String,
    thumbnail: String,
    keys_left: String,
    giveaway_url: String,
  },

  computed: {
    getProgress() {
      return this.keys_left.slice(0,this.keys_left.length - 1)
    }
  }
}
</script>

<style scoped>

.give-item-container {
  @apply base_container cursor-pointer
   transition rounded-xl text-xs;
}

.give-item-content {
  @apply base_container flex-col p-5;
  width: 200px;
  height: 150px;
}

.give-item-info {
  @apply base_container flex-col gap-2 text-white;
  text-align:center;
}

.give-item-info-progress {
  @apply base_container;
}

img {
  width: 200px;
  height: 150px;
}

label {
  @apply text-white;
}

progress::-webkit-progress-bar {
 @apply bg-white h-5;
}

progress::-webkit-progress-value {
  @apply bg-violet-700;
}

</style>