<template>
  <div class="loader">
    <span>{{ message }}</span>
    <v-progress-linear
      color="cyan"
      class="progress-bar"
      indeterminate
      rounded
      height="6"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  text-align: center;
}
</style>
