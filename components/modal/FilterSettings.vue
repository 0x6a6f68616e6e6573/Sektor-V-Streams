<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-50 inset-0 overflow-y-auto transition-all duration-200"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-dark-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          inline-block
          align-bottom
          bg-dark-800
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-lg
          sm:w-full
        "
      >
        <div class="bg-drk-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              class="
                mt-3
                text-center
                sm:mt-0
                sm:ml-4
                sm:text-left
                divide-y divide-dark-100
              "
            >
              <h3
                id="modal-title"
                class="text-lg leading-6 font-medium text-light-900"
              >
                Filter Settings
              </h3>
              <div class="mt-1.5 pt-1.5">
                <!-- <p class="text-sm text-gray-400">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p> -->
                <form ref="filterForm" class="space-y-4 text-gray-300">
                  <div class="flex flex-wrap -mx-2 space-y-4 min-w-120">
                    <div class="flex flex-wrap space-y-4">
                      <div class="w-full px-2 flex h-8 leading-loose">
                        <input
                          id="sortByViewers"
                          v-model="filter"
                          type="radio"
                          name="filter"
                          value="viewers"
                          class="
                            w-8
                            h-8
                            px-3
                            text-base
                            placeholder-gray-600
                            border-2 border-dark-400
                            bg-dark-300
                            rounded-lg
                            focus:shadow-outline
                            appearance-none
                            text-green-400
                            focus:ring-green-600
                            focus:shadow-green-600
                            checked:hover:bg-green-400
                            checked:bg-green-500
                            checked:border-transparent
                            transition-all
                          "
                        />
                        <label class="block ml-2" for="sortByViewers"
                          >Sort By Viewers</label
                        >
                      </div>
                      <div class="w-full px-2 flex h-8 leading-loose">
                        <input
                          id="sortByOrganisation"
                          v-model="filter"
                          type="radio"
                          name="filter"
                          value="organisation"
                          class="
                            w-8
                            h-8
                            px-3
                            text-base
                            placeholder-gray-600
                            border-2 border-dark-400
                            bg-dark-300
                            rounded-lg
                            focus:shadow-outline
                            appearance-none
                            text-green-400
                            focus:ring-green-600
                            focus:shadow-green-600
                            checked:hover:bg-green-400
                            checked:bg-green-500
                            checked:border-transparent
                            transition-all
                            disabled:opacity-30
                          "
                          disabled="disabled"
                        />
                        <label class="block ml-2" for="sortByOrganisation"
                          >Sort By Organisation (comming soon)</label
                        >
                      </div>
                    </div>
                    <hr class="divider" />
                    <div
                      v-for="(organisation, index) in $store.state
                        .organisations"
                      :key="index"
                      class="w-full px-2 flex h-8 leading-loose"
                      :class="{ hidden: !organisation.name }"
                    >
                      <input
                        :id="organisation.name"
                        class="
                          w-8
                          h-8
                          px-3
                          text-base
                          placeholder-gray-600
                          border-2 border-dark-400
                          bg-dark-300
                          rounded-lg
                          focus:shadow-outline
                          appearance-none
                          text-green-400
                          focus:ring-green-600
                          focus:shadow-green-600
                          checked:hover:bg-green-400
                          checked:bg-green-500
                          checked:border-transparent
                          transition-all
                        "
                        type="checkbox"
                        :checked="filteredOrgas.includes(organisation.name)"
                        @click="toggleOrga(organisation.name)"
                      />
                      <label class="block ml-2" :for="organisation.name">{{
                        organisation.name
                      }}</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-dark-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="
              w-full
              inline-flex
              justify-center
              rounded-md
              shadow-sm
              px-4
              py-2
              bg-green-500
              text-base
              font-medium
              text-white
              hover:bg-green-600
              focus:outline-none
              focus:ring focus:ring-green-600
              sm:ml-3
              sm:w-auto
              sm:text-sm
            "
            @click="saveSettings"
          >
            Save
          </button>
          <button
            type="button"
            class="
              mt-3
              w-full
              inline-flex
              justify-center
              rounded-md
              shadow-sm
              px-4
              py-2
              bg-white
              text-base
              font-medium
              text-gray-700
              hover:bg-gray-50
              focus:outline-none
              focus:ring focus:ring-gray-500
              sm:mt-0
              sm:ml-3
              sm:w-auto
              sm:text-sm
            "
            @click="$emit('closeModal')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      filteredOrgas: [...this.$store.state.filteredOrgas],
      isDisplayOrgas: this.$store.state.isDisplayOrgas,
      isDisplayOrgasDot: this.$store.state.isDisplayOrgasDot,
      filter: this.$store.state.filter,
    };
  },
  methods: {
    saveSettings() {
      localStorage.setItem(
        'FILTERED_ORGAS',
        JSON.stringify(this.filteredOrgas)
      );
      this.$store.commit('SET_FILTERED_ORGAS', this.filteredOrgas);
      localStorage.setItem('FILTER', `${this.filter}`);
      this.$store.commit('SET_FILTER', this.filter);
      //   localStorage.setItem('DISPLAY_ORGAS_DOT', `${this.isDisplayOrgasDot}`);
      //   this.$store.commit('SET_DISPLAY_ORGAS_DOT', this.isDisplayOrgasDot);
      this.$emit('closeModal');
    },
    toggleOrga(orga: any) {
      if (this.filteredOrgas.includes(orga)) {
        this.filteredOrgas = this.filteredOrgas.filter(
          (_orga) => _orga !== orga
        );
      } else {
        this.filteredOrgas.push(orga);
      }
    },
  },
});
</script>

<style>
hr.divider {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
}
</style>