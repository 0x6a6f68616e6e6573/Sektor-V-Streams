<template>
  <div
    class="
      fixed
      z-50
      inset-0
      overflow-y-auto
      transition-all
      duration-200
      blur-sm
      bg-dark-800 bg-opacity-80
    "
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        mt-10
        sm:mt-0
        max-w-180
        w-full
        relative
        left-1/2
        top-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        bg-dark-900
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
                        bg-dark-400
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
                        bg-dark-400
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
                        bg-dark-400
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
                        bg-dark-400
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
                    <label
                      for="twitch_username"
                      class="block text-sm font-medium"
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
                        bg-dark-400
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-dark-900 text-right sm:px-6">
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
                    focus:outline-none focus:ring focus:ring-gray-500
                    sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                  "
                  @click="$emit('closeModal')"
                >
                  Cancel
                </button>
                <button
                  @click="submit"
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CreateNew',
  props: ['character'],
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        alias: '',
        twitch_username: '',
        organisation: '',
        order: 0,
        _id: null,
      },
      organisations: [],
      players: [],
    };
  },
  async mounted() {
    await this.fetchOrganisations();
    if (this.character) {
      this.form.first_name = this.character.firstName;
      this.form.last_name = this.character.lastName;
      this.form.alias = this.character.alias;
      this.form.twitch_username = this.character.twitchStreamer;
      this.form.organisation = this.character.organisation;
      this.form.order = this.character.order;
      this.form._id = this.character._id;
    }
  },
  methods: {
    async submit() {
      if (this.character) {
        this.$axios.post('/api/', {
          query: `mutation updateRoleplayCharacter($_id:ID!,$firstName: String!, $lastName: String!, $alias: String!, $organisation: String!, $twitchStreamer: String! $order: Int!) {
                  updateRoleplayCharacter(input: {_id:$_id, firstName:$firstName, lastName:$lastName, alias:$alias, organisation:$organisation, twitchStreamer:$twitchStreamer, order:$order}) {
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
            order: this.form.order,
            _id: this.form._id,
          },
        });
        
        this.$emit('closeModal');
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

      this.$emit('closeModal');
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
