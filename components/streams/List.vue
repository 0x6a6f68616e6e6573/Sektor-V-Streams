<template>
  <div
    class="
      my-2
      mr-2
      grid
      gap-3
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
    "
  >
    <div
      v-for="(streamer, index) in streamers"
      :key="index"
      class="col-span-1"
      :class="{
        'opacity-50': streamer.status == 'offline',
        hidden: !$store.state.isDisplayOffline
          ? streamer.status !== 'online'
          : false,
      }"
    >
      <a
        :href="`https://twitch.tv/${streamer.displayName}`"
        target="_blank"
        rel="noreferrer"
        ><span
          class="block relative overflow-hidden rounded"
          style="padding-bottom: 56.25%"
          ><span
            class="
              absolute
              z-10
              inset-0
              bg-center bg-cover
              transform
              hover:scale-110
              transition-transform
              duration-500
            "
            :class="{ 'bg-dark-400': $store.state.isLoading }"
            :title="streamer.displayName"
            :style="{
              backgroundImage:
                'url(' +
                encodeURI(
                  streamer.status === 'offline'
                    ? streamer.banner
                    : `https://static-cdn.jtvnw.net/previews-ttv/live_user_${streamer.displayName.toLowerCase()}-640x360.jpg?` +
                        new Date().getTime()
                ) +
                ')',
            }"
          ></span
          ><span
            :class="{
              hidden:
                !$store.state.isDisplayViewers || streamer.status == 'offline',
              'bg-dark-400': $store.state.isLoading,
            }"
            class="
              absolute
              z-20
              bottom-2
              right-2
              py-0.5
              px-1.5
              bg-dark-900 bg-opacity-70
              rounded
              text-sm
            "
            >{{ streamer.views }} viewers</span
          ><span
            class="absolute z-20 top-1 left-2 rounded text-sm"
            :class="{ hidden: !$store.state.isDisplayOrgas }"
          >
            <span
              :class="{
                hidden:
                  $store.state.isDisplayOrgasDot || $store.state.isLoading,
              }"
            >
              <span
                v-for="(character, _index) in streamer.characters"
                :key="_index"
                :title="`${character.firstName}${
                  character.alias != '' ? `\' ${character.alias}\'` : ''
                } ${character.lastName}`"
                class="
                  inline-flex
                  items-center
                  justify-center
                  mr-1
                  mb-1
                  text-xs
                  font-bold
                  leading-none
                  rounded-full
                  px-1.5
                  py-1
                "
                :class="`
              bg-${
                character.organisation in organisations
                  ? organisations[character.organisation].color
                  : 'gray'
              }-500`"
              >
                {{ character.organisation }}
              </span>
            </span>
            <span
              :class="{
                hidden:
                  !$store.state.isDisplayOrgasDot && !$store.state.isLoading,
              }"
            >
              <span
                v-for="(character, __index) in streamer.characters"
                :key="__index"
                :title="`${character.firstName} ${
                  character.alias != '' ? `\'${character.alias}\'` : ''
                } ${character.lastName} (${character.organisation})`"
                class="inline-block w-2.5 h-2.5 mr-2 rounded-full"
                :class="`
              bg-${
                character.organisation in organisations
                  ? organisations[character.organisation].color
                  : 'gray'
              }-500`"
              ></span></span
          ></span>
        </span>
        <span class="flex flex-row py-1"
          ><span
            class="
              ml-0.5
              w-10
              h-10
              bg-center bg-cover
              mr-2
              rounded-full
              ring-1.5 ring-light-500
            "
            :class="{ 'bg-true-gray-500': $store.state.isLoading }"
            :title="streamer.displayName"
            :style="{
              flex: '0 0 2.5em',
              backgroundImage: `url(${streamer.logo})`,
            }"
          ></span
          ><span class="flex flex-col min-w-0 justify-center w-full"
            ><div
              class="
                font-bold
                whitespace-nowrap
                overflow-hidden overflow-ellipsis
                hover:text-green-100
                transition-colors
                duration-200
              "
              :class="{
                'bg-true-gray-500 min-w-full h-4 rounded mb-1':
                  $store.state.isLoading,
              }"
              :title="streamer.description"
            >
              {{ streamer.description }}
            </div>
            <span
              class="
                text-opacity-70 text-sm
                whitespace-nowrap
                overflow-hidden overflow-ellipsis
              "
              :class="{
                'bg-true-gray-400 max-w-30 h-4 rounded': $store.state.isLoading,
              }"
              >{{ streamer.displayName }}</span
            ></span
          ></span
        ></a
      >
    </div>
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
    <span v-if="streamers.length == 0">Nothing found, sorry</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isDisplayViewers: true,
      isDisplayOrgas: true,
      isDisplayOrgasDot: true,
      organisations: {},
      streamers: [
        {
          _id: '1',
          displayName: '',
          url: '',
          logo: '',
          views: 69,
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '2',
          displayName: '',
          url: '',
          logo: '',
          views: 420,
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '3',
          displayName: '',
          url: '',
          logo: '',
          views: 1337,
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '4',
          displayName: '',
          url: '',
          logo: '',
          views: 42,
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '54',
          displayName: '',
          url: '',
          logo: '',
          views: 25,
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '6',
          displayName: '',
          url: '',
          logo: '',
          views: 21,
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '7',
          displayName: '',
          url: '',
          logo: '',
          views: '3.141592653589793',
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '8',
          displayName: '',
          url: '',
          logo: '',
          views: '2.7141592653589793',
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '9',
          displayName: '',
          url: '',
          logo: '',
          views: '00815',
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
        {
          _id: '10',
          displayName: '',
          url: '',
          logo: '',
          views: 1995,
          description: '',
          organisations: ['1', '1', '1', '1'],
          characters: [] as any[],
        },
      ],
    };
  },
  watch: {
    '$store.state.filter': {
      handler(nv) {
        this.filterStreamers(this.streamers, nv);
      },
      immediate: true, // provides initial (not changed yet) state
    },
  },
  created() {
    this.$store.commit('START_LOADING');
  },
  async mounted() {
    await this.fetchData();

    this.$store.commit('STOP_LOADING');

    setInterval(async () => {
      // this.$store.commit('START_LOADING');
      await this.fetchData();
      // this.$store.commit('STOP_LOADING');
    }, 2.5 * 60 * 1000);
  },
  methods: {
    filterStreamers(streamers: any[], nv: string) {
      if (nv === 'viewers') {
        streamers.sort((a, b) =>
          a.views < b.views ? 1 : b.views < a.views ? -1 : 0
        );
      } else if (nv === 'organistation') {
        streamers.sort((a, b) =>
          a.views < b.views ? 1 : b.views < a.views ? -1 : 0
        );
      }
      this.streamers = streamers;
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
              }
            }`
        )
      ).data.data.getAllOrganisations;

      if (organisations.length > 0) {
        this.organisations = organisations.reduce(
          (obj: any, item: any) =>
            Object.assign(obj, {
              [item.name]: { color: item.color, name: item.name },
            }),
          {}
        );
      }
    },
    async fetchData() {
      try {
        await this.fetchOrganisations();
        const streamers = await (
          await this.$axios.get(
            `/api/?query=` +
              `
            query {
              getAllStreamers {
                displayName
                twitch_id
                description
                logo
                stillExists
                banner
                preview
                status
                game
                followers
                createdAt
                lastUpdated
                views
              }
            }`
          )
        ).data.data.getAllStreamers;

        const response = await (
          await this.$axios.get(
            `/api/?query=` +
              `
            query {
              getAllCharcters {
                firstName
                lastName
                alias
                organisation
                twitchStreamer
              }
            }`
          )
        ).data.data.getAllCharcters;

        for (let i = 0; i < streamers.length; i++) {
          streamers[i].characters = [];
        }

        for (let index = 0; index < response.length; index++) {
          const character = response[index];
          const pos = streamers.findIndex(
            (streamer: any) =>
              streamer.displayName.toLowerCase() ===
              character.twitchStreamer.toLowerCase()
          );

          streamers[pos].characters.push(character);
        }
        this.filterStreamers(streamers, this.$store.state.filter);
      } catch (e) {
        this.streamers = [];
      }
    },
  },
});
</script>
