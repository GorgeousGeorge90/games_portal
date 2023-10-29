<template>
  <button class="base-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton"
}
</script>

<style scoped>

.base-btn {
  @apply base_container capitalize p-2 text-xs
  text-white bg-black rounded-md
  hover:bg-white hover:text-black;
}


</style>