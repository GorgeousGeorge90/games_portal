<template>
  <div class="base-input">
    <label :for="id">{{ name }}</label>
    <input :type="type"
           :value="modelValue"
           @input="updateInput"
           :id="id"
           required
    >
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id:String,
    name:String,
    type:String,
    modelValue:[String,Number],
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.base-input {
  @apply base_container flex-col gap-1;
}

</style>