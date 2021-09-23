<template>
  <div
    class="
      mt-10
      sm:mt-0
      max-w-180
      w-full
      relative
      left-1/2
      transform
      -translate-x-1/2
    "
  >
    <div class="md:grid md:grid-cols-2 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST" @submit.prevent="submit">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium"
                    >First name</label
                  >
                  <input
                    id="first_name"
                    v-model="form.first_name"
                    required
                    type="text"
                    name="first_name"
                    autocomplete="off"
                    class="
                      mt-1
                      focus:ring-green-500 focus:border-green-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-dark-300
                      rounded-md
                      bg-dark-200
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium"
                    >Last name</label
                  >
                  <input
                    id="last_name"
                    v-model="form.last_name"
                    type="text"
                    name="last_name"
                    autocomplete="off"
                    required
                    class="
                      mt-1
                      focus:ring-green-500 focus:border-green-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-dark-300
                      rounded-md
                      bg-dark-200
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium"
                    >Alias</label
                  >
                  <input
                    id="alias"
                    v-model="form.alias"
                    type="text"
                    name="alias"
                    autocomplete="off"
                    class="
                      mt-1
                      focus:ring-green-500 focus:border-green-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-dark-300
                      rounded-md
                      bg-dark-200
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium"
                    >Organisattion</label
                  >
                  <select
                    id="organisation"
                    v-model="form.organisation"
                    name="organisation"
                    required
                    autocomplete="off"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-dark-300
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-green-500
                      focus:border-green-500
                      sm:text-sm
                      bg-dark-200
                    "
                  >
                    <option
                      v-for="(organisation, index) in organisations"
                      :key="index"
                    >
                      {{ organisation.name }}
                    </option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="twitch_username" class="block text-sm font-medium"
                    >Twitch Username</label
                  >
                  <input
                    id="twitch_username"
                    v-model="form.twitch_username"
                    type="text"
                    name="twitch_username"
                    autocomplete="off"
                    required
                    class="
                      mt-1
                      focus:ring-green-500 focus:border-green-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-dark-300
                      rounded-md
                      bg-dark-200
                    "
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-dark-800 text-right sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-green-600
                  hover:bg-green-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-green-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="overflow-auto lg:overflow-visible">
          <table class="table text-gray-400 border-separate space-y-6 text-sm m-auto text-center">
            <thead class="bg-dark-200 text-light-500">
              <tr>
                <th class="p-3 text-left">First Name</th>
                <th class="p-3 text-left">Last Name</th>
                <th class="p-3 text-left">Alias</th>
                <th class="p-3 text-left">Organisation</th>
                <th class="p-3 text-left">Twitch Username</th>
                <!-- <th class="p-3 text-left">Actions</th> -->
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(player, index) in players"
                :key="index"
                class="bg-dark-200"
              >
                <!-- <td class="p-3 text-left">
                <button
                  @click="editPlayer(player)"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-green-600
                    hover:bg-green-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-green-500
                  "
                >
                  Edit
                </button>
                <button
                  @click="deletePlayer(player)"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-red-600
                    hover:bg-red-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-red-500
                  "
                >
                  Delete
                </button>
              </td> -->
                <td class="p-3 font-bold">
                  <div class="flex align-items-center">
                    <div class="ml-3">
                      <div class="">{{ player.firstName }}</div>
                      <!-- <div class="text-gray-500">mail@rgmail.com</div> -->
                    </div>
                  </div>
                </td>
                <td class="p-3 font-bold">{{ player.lastName }}</td>
                <td class="p-3 font-bold">{{ player.alias }}</td>
                <td class="p-3 font-bold">
                  {{ player.organisation }}
                </td>
                <td class="p-3 font-bold">
                  {{ player.twitchStreamer }}
                </td>
                <!-- <td class="p-3">
                <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                  <i class="material-icons-outlined text-base">visibility</i>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-100 mx-2">
                  <i class="material-icons-outlined text-base">edit</i>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-100 ml-2">
                  <i class="material-icons-round text-base">delete_outline</i>
                </a>
              </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CreateNew',
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        alias: '',
        twitch_username: '',
        organisation: '',
      },
      organisations: [],
      players: [],
    };
  },
  async mounted() {
    await this.fetchOrganisations();
    await this.fetchPlayers();
  },
  methods: {
    async submit() {
      let person = prompt('Please enter the password', '');
      if (person !== 'mousy-ignition-halogen') {
        return;
      }
      // axios graphql query for mutation to find a user by username
      let response = await this.$axios.post('/api/', {
        query: `mutation getStreamer($displayName: String!) {
          getStreamer(input: {displayName:$displayName}) {
            displayName
            twitch_id
          }
        }`,
        variables: {
          displayName: this.form.twitch_username,
        },
      });

      // if user exists, update the user
      if (!response.data.data) {
        // create new streamer
        response = await this.$axios.post('/api/', {
          query: `mutation createTwitchStreamer($displayName: String!) {
            createTwitchStreamer(input: {displayName:$displayName}) {
              displayName
            }
          }`,
          variables: {
            displayName: this.form.twitch_username,
          },
        });
        console.log(response);
      }

      response = await this.$axios.post('/api/', {
        query: `mutation createRoleplayCharacter($firstName: String!, $lastName: String!, $alias: String!, $organisation: String!, $twitchStreamer: String!) {
          createRoleplayCharacter(input: {firstName:$firstName, lastName:$lastName, alias:$alias, organisation:$organisation, twitchStreamer:$twitchStreamer}) {
            _id
            twitchStreamer
          }
        }`,
        variables: {
          firstName: this.form.first_name,
          lastName: this.form.last_name,
          alias: this.form.alias || '',
          organisation: this.form.organisation,
          twitchStreamer: this.form.twitch_username,
        },
      });

      if (response.data.data) {
        alert('Character created!');
      }
    },
    async fetchOrganisations() {
      this.organisations = await (
        await this.$axios.get(
          `/api/?query=` +
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
    },
    async fetchPlayers() {
      this.players = await (
        await this.$axios.get(
          `/api/?query=` +
            `query {
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
    },
  },
});
</script>

<style>
.table {
  border-spacing: 0 15px;
  color: rgb(223, 223, 223);
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>
