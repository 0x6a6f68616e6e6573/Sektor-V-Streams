<template>
  <div class="mx-2 w-full select-none text-sm" :class="{ selector: !loggedIn }">
    <span
      class="
        hidden
        bg-light-500
        bg-dark-500
        bg-gray-500
        bg-red-500
        bg-yellow-500
        bg-green-500
        bg-blue-500
        bg-indigo-500
        bg-purple-500
        bg-pink-500
        bg-rose-500
        bg-fuchsia-500
        bg-violet-500
        bg-cyan-500
        bg-teal-500
        bg-emerald-500
        bg-lime-500
        bg-amber-500
        bg-orange-500
        bg-light-blue-500
        bg-warm-gray-500
        bg-true-gray-500
        bg-cool-gray-500
        bg-blue-gray-500
      "
    ></span>
    <component
      :is="currentModal"
      @closeModal="closeModal"
      :group="group"
      :character="character"
    />
    <div class="h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
      <div
        v-for="(group, index) in Object.keys(groups)"
        :key="'#' + index"
        class="flex flex-col h-full"
      >
        <!-- :class="{ hidden: group == 'updated' }" -->
        <div v-if="group !== 'updated'" class="mb-5 w-full flex justify-center">
          <button
            v-if="loggedIn"
            @click="
              group == 'group4'
                ? openModal('characterSettings')
                : openModal('organisationSettings', group)
            "
            class="
              bg-green-500
              hover:bg-green-600
              text-white text-center
              outline-none
              focus:outline-none
              transition-colors
              duration-200
              py-1
              pb-2
              px-3
              rounded
              font-bold
              text-2xl
              align-middle
              items-center
              leading-none
            "
          >
            &#43;
          </button>
        </div>
        <div
          v-for="(key, jndex) in Object.keys(groups[group])"
          :key="'##' + jndex"
          class="relative mb-5 rounded-lg overflow-hidden"
        >
          <div
            class="relative p-2 text-center font-semibold"
            :class="`bg-${groups[group][key].color || 'gray'}-500`"
          >
            {{ key }}
            <!-- <div class="absolute top-1 left-1">
              <button
                v-if="loggedIn"
                @click="sortByChar(group, key)"
                class="
                  text-white text-center
                  transform
                  rotate-135
                  outline-none
                  focus:outline-none
                  transition-colors
                  duration-200
                  py-0
                  pb-1
                  px-1.5
                  rounded
                  text-2xl
                  align-middle
                  items-center
                  leading-none
                  hover:animate-spin
                "
              >
                &#128472;
              </button>
            </div>
            <div class="absolute top-1 right-1">
              <button
                v-if="loggedIn"
                @click="sortByStreamer(group, key)"
                class="
                  text-white text-center
                  transform
                  rotate-45
                  outline-none
                  focus:outline-none
                  transition-colors
                  duration-200
                  py-0
                  pb-1
                  px-1.5
                  rounded
                  text-2xl
                  align-middle
                  items-center
                  leading-none
                  hover:animate-spin
                "
              >
                &#128472;
              </button>
            </div> -->
          </div>
          <div
            v-if="loggedIn"
            class="
              relative
              grid grid-cols-3
              text-center
              align-middle
              items-center
              text-3xl
              p-0
            "
          >
            <div class="relative h-4 col-span-2">
              <div
                @click="sortByChar(group, key)"
                :class="{
                  'transform -translate-y-3/4':
                    groups[group][key].sortBy != 'firstname',
                }"
              >
                {{
                  groups[group][key].sortBy == 'firstname'
                    ? '&#129171;'
                    : '&#129169;'
                }}
              </div>
            </div>
            <div class="h-4">
              <div
                @click="sortByStreamer(group, key)"
                :class="{
                  'transform -translate-y-3/4':
                    groups[group][key].sortBy != 'streamer',
                }"
              >
                {{
                  groups[group][key].sortBy == 'streamer'
                    ? '&#129171;'
                    : '&#129169;'
                }}
              </div>
            </div>
          </div>
          <draggable
            class="h-full"
            tag="div"
            v-model="groups[group][key].characters"
            v-bind="dragOptions"
            :move="onMove"
            @change="updatedGroups"
          >
            <transition-group tag="div" class="min-h-24">
              <div
                class="relative grid grid-cols-3 align-middle items-center"
                :class="{
                  'bg-light-50 bg-opacity-3': kndex % 2 == index % 2,
                  'bg-light-50 bg-opacity-6': kndex % 2 != index % 2,
                }"
                v-for="(char, kndex) in groups[group][key].characters"
                :key="`${index}#${kndex}`"
              >
                <div
                  class="
                    ml-1
                    py-1
                    col-span-2
                    text-center
                    whitespace-nowrap
                    overflow-hidden overflow-ellipsis
                  "
                >
                  {{ char.firstName + ' ' + char.lastName }}
                </div>
                <a
                  :href="`https://www.twitch.tv/${char.twitchStreamer}`"
                  target="_blank"
                  class="
                    mr-6
                    text-center text-purple-500
                    font-semibold
                    text-base
                  "
                  >{{ char.twitchStreamer }}</a
                >
                <div class="absolute top-1 -right-1">
                  <button
                    v-if="loggedIn"
                    @click="openModal('characterSettings', false, char)"
                    class="
                      text-white text-cente
                      outline-none
                      focus:outline-none
                      transition-colors
                      duration-200
                      py-0
                      pb-1
                      px-1.5
                      rounded
                      text-xl
                      align-middle
                      items-center
                      leading-none
                      hover:animate-pulse
                    "
                  >
                    &#128393;
                  </button>
                </div>
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>
      <div v-if="groups.group4['Zivilist']" class="m-5 col-span-2">
        <img
          class="object-contain w-full"
          src="https://lh4.googleusercontent.com/yh81eThrHKR1j28iCpf-tLSUldDdCZFuX_hM-86A_25wHpxhYRiCbE15-buBIUUqvfgjzsBj3ys68u22--1qG1BA_xe4zjzoxUkqvBGSjhoEH4uTSkO6jmGhPfBfx3Nl6y3_f1g9eQ=w1762-h349"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import draggable from 'vuedraggable';

import CharacterSettingsModal from '@/components/modal/Character.vue';
import OrganisationSettingsModal from '@/components/modal/Organisation.vue';

export default Vue.extend({
  name: 'List',
  layout: 'list',
  components: {
    draggable,
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
  data() {
    return {
      groups: {
        group1: {},
        group2: {},
        group3: {},
        group4: {},
        updated: Date.now(),
      } as any,
      editable: true,
      isDragging: false,
      delayedDragging: false,
      organisations: [] as any,
      characters: [] as any,
      group: '',
      character: null,
      currentModal: '',
      modals: {
        characterSettings: { component: CharacterSettingsModal },
        organisationSettings: { component: OrganisationSettingsModal },
      } as any,
      loggedIn: false,
    };
  },
  async mounted() {
    await this.fetchData();
    if (localStorage.password === 'mousy-ignition-halogen') {
      this.loggedIn = true;
    }
  },
  methods: {
    onMove({ relatedContext, draggedContext }: any) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      this.groups.updated = Date.now();
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    sortByChar(group: string, key: string) {
      this.groups[group][key].sortBy = 'firstname';
      this.groups[group][key].characters.sort((a: any, b: any) => {
        if (a.firstName < b.firstName) {
          return -1;
        } else if (a.firstName > b.firstName) {
          return 1;
        } else return 0;
      });
      this.groups.updated = Date.now();
      this.save();
    },
    sortByStreamer(group: string, key: string) {
      this.groups[group][key].sortBy = 'streamer';
      this.groups[group][key].characters.sort((a: any, b: any) => {
        if (a.twitchStreamer.toLowerCase() < b.twitchStreamer.toLowerCase()) {
          return -1;
        } else if (
          a.twitchStreamer.toLowerCase() > b.twitchStreamer.toLowerCase()
        ) {
          return 1;
        } else return 0;
      });
      this.groups.updated = Date.now();
      this.save();
    },
    async fetchOrganisations() {
      const organisations = await (
        await this.$axios.get(
          `/api/graphql?query=` +
            `
            query {
              getAllOrganisations {
                name
                color
                description
                group
              }
            }`
        )
      ).data.data.getAllOrganisations;

      for (let i = 0; i < organisations.length; i++) {
        this.groups[organisations[i].group || 'group1'][organisations[i].name] =
          { ...organisations[i], characters: [], sortBy: '' };
      }
      this.organisations = organisations;
    },
    async fetchData() {
      try {
        await this.fetchOrganisations();

        const characters = await (
          await this.$axios.get(
            `/api/?query=` +
              `
            query {
              getAllCharcters {
                _id
                firstName
                lastName
                alias
                organisation
                twitchStreamer
                order
              }
            }`
          )
        ).data.data.getAllCharcters;

        for (let i = 0; i < characters.length; i++) {
          const pos = this.organisations.findIndex(
            (item: any) => item.name == characters[i].organisation
          );
          this.groups[this.organisations[pos].group || 'group1'][
            this.organisations[pos].name
          ].characters.push(characters[i]);
        }
      } catch (e) {
        console.log(e);
      } finally {
        for (const group in this.groups) {
          for (const key in this.groups[group]) {
            this.groups[group][key].characters.sort((a: any, b: any) => {
              if (a.order < b.order) {
                return -1;
              } else if (a.order > b.order) {
                return 1;
              } else return 0;
            });
          }
        }
        this.groups.updated = Date.now();
      }
    },
    async save() {
      for (const group in this.groups) {
        for (const key in this.groups[group]) {
          for (let i = 0; i < this.groups[group][key].characters.length; i++) {
            const char = this.groups[group][key].characters[i];
            if (char.order == i && char.organisation == key) continue;
            char.order = i;
            char.organisation = key;
            this.$axios.post('/api/', {
              query: `mutation updateRoleplayCharacter($_id:ID!,$firstName: String!, $lastName: String!, $alias: String!, $organisation: String!, $twitchStreamer: String! $order: Int!) {
                  updateRoleplayCharacter(input: {_id:$_id, firstName:$firstName, lastName:$lastName, alias:$alias, organisation:$organisation, twitchStreamer:$twitchStreamer, order:$order}) {
                  _id
                  twitchStreamer
                  }
                }`,
              variables: char,
            });
          }
        }
      }
    },
    openModal(modal: string, group?: string, character?: any) {
      if (group) this.group = group;
      if (character) this.character = character;
      this.currentModal = this.modals[modal].component;
    },
    closeModal() {
      this.currentModal = '';
      this.group = '';
      this.character = null;
      this.fetchData();
    },
    updatedGroups() {
      this.groups.updated = Date.now();
      this.save();
    },
  },
  watch: {
    isDragging(newValue: any) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
  },
});
</script>

<style>
.selector {
  pointer-events: none;
  /* For Opera and <= IE9, we need to add unselectable="on" attribute onto each element */
  /* Check this site for more details: http://help.dottoro.com/lhwdpnva.php */
  -moz-user-select: none; /* These user-select properties are inheritable, used to prevent text selection */
  -webkit-user-select: none;
  -ms-user-select: none; /* From IE10 only */
  user-select: none; /* Not valid CSS yet, as of July 2012 */

  -webkit-user-drag: none; /* Prevents dragging of images/divs etc */
  user-drag: none;
}
</style>
