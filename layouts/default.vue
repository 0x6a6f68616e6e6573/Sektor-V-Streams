<template>
  <div
    class="
      w-full
      h-screen
      bg-dark-800
      text-light-100
      font-sans
      flex flex-col
      overflow-hidden
    "
  >
    <LoadingBar />
    <Toast />
    <component :is="currentModal" @closeModal="closeModal" />
    <NavigationTopbar @openModal="openModal" />
    <Nuxt ref="Page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DisplaySettingsModal from '@/components/modal/DisplaySettings.vue';
import FilterSettingsModal from '@/components/modal/FilterSettings.vue';

export default Vue.extend({
  data() {
    return {
      currentModal: '',
      modals: {
        displaySettings: { component: DisplaySettingsModal },
        filterSettings: { component: FilterSettingsModal },
      } as any,
    };
  },
  head() {
    return {
      title: 'Sektor Streams by Jo',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    };
  },
  mounted() {
    this.$store.commit(
      'SET_DISPLAY_VIEWERS',
      localStorage.getItem('DISPLAY_VIEWERS') ?? 'true'
    );
    this.$store.commit(
      'SET_DISPLAY_ORGAS',
      localStorage.getItem('DISPLAY_ORGAS') ?? 'true'
    );
    this.$store.commit(
      'SET_DISPLAY_ORGAS_DOT',
      localStorage.getItem('DISPLAY_ORGAS_DOT') ?? 'true'
    );
    this.$store.commit(
      'SET_DISPLAY_OFFLINE',
      localStorage.getItem('DISPLAY_OFFLINE') ?? 'true'
    );
    this.$store.commit(
      'SET_FILTERED_ORGAS',
      JSON.parse(localStorage.getItem('FILTERED_ORGAS') ?? '[]')
    );
    this.$store.commit(
      'SET_FILTER',
      localStorage.getItem('FILTER') ?? 'viewers'
    );
  },
  methods: {
    openModal(modal: string) {
      this.currentModal = this.modals[modal].component;
    },
    closeModal() {
      this.currentModal = '';
    },
  },
});
</script>

<style>
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