<template>
  <div class="relative z-30">
    <div class="mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-dark-300
          py-3
          md:justify-start
          md:space-x-10
        "
      >
        <NavigationBrand />
        <NavigationMobileButton @open="openMobileMenu" />
        <NavigationNav @openModal="openModal" />
        <!-- <NavigationRegistration /> -->
      </div>
    </div>

    <div
      v-if="mobileOpen"
      class="
        absolute
        top-0
        inset-x-0
        p-2
        transition
        transform
        origin-top-right
        md:hidden
        transition-all
        h-screen
        overflow-y-hidden
      "
      :class="{
        'duration-200 ease-out': mobileOpen,
        'duration-100 ease-in': !mobileOpen,
      }"
    >
      <div
        class="
          rounded-lg
          shadow-lg
          ring-1 ring-black ring-opacity-5
          bg-dark-700
          divide-y-2 divide-dark-400
        "
      >
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between relative">
            <!-- <NavigationMobileBrand /> -->
            <!-- <div>Links</div> -->
            <div class="w-full text-center text-lg leading-loose font-semibold">
              Settings
            </div>
            <div class="absolute -right-1">
              <NavigationMobileClose @close="closeMobileMenu" />
            </div>
          </div>
          <!-- <div class="mt-6">
            <NavigationMobileNav />
          </div> -->
        </div>
        <div class="py-6 px-5 space-y-6">
          <NavigationMobileNavSettings
            @close="closeMobileMenu"
            @openModal="openModal"
          />
          <!-- <NavigationMobileRegistration /> -->
        </div>
      </div>
      <div class="h-full" @click="closeMobileMenu"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      mobileOpen: false,
    };
  },
  methods: {
    openMobileMenu() {
      this.mobileOpen = true;
    },
    closeMobileMenu() {
      this.mobileOpen = false;
    },
    openModal(modal: any) {
      this.$emit('openModal', modal);
      this.closeMobileMenu();
    },
  },
});
</script>