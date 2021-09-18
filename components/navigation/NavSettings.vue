<template>
  <ul
    class="
      relative
      grid
      gap-6
      bg-dark-700
      text-light-700
      px-5
      py-6
      sm:gap-8
      sm:p-8
    "
  >
    <li v-for="setting in settings" :key="setting.link">
      <!-- <NuxtLink :to="setting.link"> -->
      <div
        class="
          -m-3
          p-3
          flex
          items-start
          rounded-lg
          cursor-pointer
          transition-colors
          duration-100
          hover:bg-dark-800
        "
        @click="$emit('openModal', setting.modal)"
      >
        <div class="ml-4">
          <p class="text-base font-medium">{{ setting.name }}</p>
          <p class="mt-1 text-sm text-light-900">
            {{ setting.description }}
          </p>
        </div>
      </div>
      <!-- </NuxtLink> -->
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      settings: [] as any[],
    };
  },
  created() {
    this.$store.state.settings.forEach((setting: any) =>
      this.settings.push(setting)
    );
  },
});
</script>