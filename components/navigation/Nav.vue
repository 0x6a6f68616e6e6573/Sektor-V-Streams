<template>
  <nav>
    <ul class="hidden md:flex space-x-10">
      <div class="relative">
        <button
          type="button"
          class="
            text-light-500
            group
            bg-transparent
            rounded-md
            inline-flex
            items-center
            text-base
            font-medium
            transition-colors
            duration-150
            hover:text-green-400
            focus:outline-none
          "
          :class="{ 'text-green-500': isLinkOptionsOpen }"
          aria-expanded="false"
          @click="toggleLinkOptions"
        >
          <span>Settings</span>

          <svg
            class="
              text-light-700
              ml-1
              h-5
              w-5
              group-hover:text-light-900
              transition-transform
              duration-150
            "
            :class="{ 'transform rotate-180': isLinkOptionsOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          v-if="isLinkOptionsOpen"
          class="
            absolute
            z-10
            -ml-4
            mt-3
            transform
            px-2
            w-screen
            sm:px-0
            md:ml-0
            md:left-1/2
            md:-translate-x-1/2
          "
        >
          <div
            class="
              rounded-lg
              shadow-lg
              ring-1 ring-black ring-opacity-5
              overflow-hidden
              max-w-md
              m-auto
            "
          >
            <NavigationNavSettings
              @close="closeLinkOptions"
              @openModal="openModal"
            />
            <!-- <div
              class="
                px-5
                py-5
                bg-dark-700
                space-y-6
                sm:flex
                sm:space-y-0 sm:space-x-10
                sm:px-8
              "
            >
              <div class="flow-root">
                <a
                  href="#"
                  class="
                    -m-3
                    p-3
                    flex
                    items-center
                    rounded-md
                    text-base
                    font-medium
                    hover:bg-dark-800
                  "
                >
                  <svg
                    class="flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="ml-3">Watch Demo</span>
                </a>
              </div>

              <div class="flow-root">
                <a
                  href="#"
                  class="
                    -m-3
                    p-3
                    flex
                    items-center
                    rounded-md
                    text-base
                    font-medium
                    hover:bg-dark-800
                  "
                >
                  <svg
                    class="flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span class="ml-3">Contact Sales</span>
                </a>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <!-- <div class="relative">
        <button
          type="button"
          class="
            text-gray-500
            group
            bg-transparent
            rounded-md
            inline-flex
            items-center
            text-base
            font-medium
            hover:text-gray-900
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
          aria-expanded="false"
        >
          <span>More</span>
          <svg
            class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          class="
            absolute
            z-10
            left-1/2
            transform
            -translate-x-1/2
            mt-3
            px-2
            w-screen
            max-w-md
            sm:px-0
          "
        >
          <div
            class="
              rounded-lg
              shadow-lg
              ring-1 ring-black ring-opacity-5
              overflow-hidden
            "
          >
            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <a
                href="#"
                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">Help Center</p>
                  <p class="mt-1 text-sm text-gray-500">
                    Get all of your questions answered in our forums or contact
                    support.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">Guides</p>
                  <p class="mt-1 text-sm text-gray-500">
                    Learn how to maximize our platform to get the most out of
                    it.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">Events</p>
                  <p class="mt-1 text-sm text-gray-500">
                    See what meet-ups and other events we might be planning near
                    you.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">Security</p>
                  <p class="mt-1 text-sm text-gray-500">
                    Understand how we take your privacy seriously.
                  </p>
                </div>
              </a>
            </div>
            <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
              <div>
                <h3
                  class="
                    text-sm
                    tracking-wide
                    font-medium
                    text-gray-500
                    uppercase
                  "
                >
                  Recent Posts
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li class="text-base truncate">
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:text-gray-700"
                    >
                      Boost your conversion rate
                    </a>
                  </li>

                  <li class="text-base truncate">
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:text-gray-700"
                    >
                      How to use search engine optimization to drive traffic to
                      your site
                    </a>
                  </li>

                  <li class="text-base truncate">
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:text-gray-700"
                    >
                      Improve your customer experience
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-5 text-sm">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View all posts <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isLinkOptionsOpen: false,
    };
  },
  methods: {
    toggleLinkOptions() {
      this.isLinkOptionsOpen = !this.isLinkOptionsOpen;
    },
    closeLinkOptions() {
      this.isLinkOptionsOpen = false;
    },
    openModal(modal: any) {
      this.$emit('openModal', modal);
      this.closeLinkOptions();
    },
  },
});
</script>