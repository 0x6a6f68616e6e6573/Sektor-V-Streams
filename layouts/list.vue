<template>
  <div class="w-full h-full bg-dark-800">
    <div
      class="w-full min-h-screen bg-dark-800 text-light-100 font-sans flex flex-row justify-center"
    >
      <!-- overflow-hidden -->
      <Nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
  methods: {},
});
</script>

<style>
body {
  background-color: rgba(50, 50, 50, 1);
}
*::-webkit-scrollbar {
  background-color: transparent;
  height: 12px;
  width: 12px;
}
*::-webkit-scrollbar-corner {
  background-color: transparent;
}
*::-webkit-scrollbar-thumb {
  transition: background 0.2s ease-in-out;
  border: 3px solid transparent;
  -webkit-background-clip: content-box;
  background-clip: content-box;
  --tw-bg-opacity: 1;
  background-color: rgba(18, 18, 18, var(--tw-bg-opacity));
  border-radius: 9999px;
}
</style>
