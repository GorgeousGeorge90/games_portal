<template>
  <section class="select-container">
    <div class="select-content">
      <label :for="id">
        <slot></slot>
      </label>
      <select class="select-option"
              :name="modelValue"
              :value="modelValue"
              @input="updateSelect"
              :id="id"
              required>
        <option v-for="item in options"
                :key="item"
                :value="item"
        >{{ item }}
        </option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    options:Array,
    id:String,
    modelValue:[String,Number],
  },

  methods: {
    updateSelect(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

.select-container {
  @apply base_container;
}

.select-content {
  @apply base_container flex-col capitalize font-semibold
  text-sm;
}

.select-option {
  @apply text-black rounded-md;
}

.select-option:focus {
  @apply outline-teal-400 outline outline-2 outline-offset-2;
}

</style>