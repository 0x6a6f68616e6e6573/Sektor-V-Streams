<template>
  <!-- <div v-if="$store.state.isLoading" class="w-full h-1 bg-green-500"></div> -->
  <div
    v-if="isLoading"
    class="
      flex
      justify-center
      items-center
      absolute
      z-50
      top-2
      right-2
      overflow-hidden
    "
  >
    <div
      class="
        animate-spin
        rounded-full
        h-8
        w-8
        border-t-2 border-b-2 border-green-500
      "
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    _isLoading() {
      return this.$store.state.isLoading;
    },
  },
  watch: {
    _isLoading(val) {
      if (val) {
        this.isLoading = true;
      } else {
        setTimeout(() => {
          this.isLoading = false;
        }, 50);
      }
    },
  },
});
</script>
