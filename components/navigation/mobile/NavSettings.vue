<template>
  <ul class="grid grid-cols-2 gap-x-8 text-light-500 text-center">
    <li v-for="setting in settings" :key="setting.link">
      <!-- <NuxtLink :to="setting.link"> -->
        <div
          class="
            py-2
            text-base
            font-medium
            rounded-md
            cursor-pointer
            transition-colors
            duration-150
            hover:bg-dark-800
            hover:text-light-900
          "
          @click="$emit('openModal', setting.modal)"
        >
          {{ setting.name }}
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