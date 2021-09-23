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
                  <label for="name" class="block text-sm font-medium"
                    >Organisation Name</label
                  >
                  <input
                    id="name"
                    v-model="form.name"
                    autocomplete="off"
                    required
                    type="text"
                    name="name"
                    class="
                      mt-1
                      focus:ring-green-500
                      focus:border-green-500
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
                  <label for="color" class="block text-sm font-medium"
                    >Color</label
                  >
                  <input
                    id="color"
                    type="text"
                    v-model="form.color"
                    name="color"
                    autocomplete="off"
                    required
                    class="
                      mt-1
                      focus:ring-green-500
                      focus:border-green-500
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
                  <label for="descriptions" class="block text-sm font-medium"
                    >Description</label
                  >
                  <input
                    id="descriptions"
                    v-model="form.description"
                    type="text"
                    name="descriptions"
                    autocomplete="off"
                    class="
                      mt-1
                      focus:ring-green-500
                      focus:border-green-500
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
                  <span
                    v-for="(color, index) in colors"
                    :key="index"
                    :class="`
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
                      bg-${color}-500
                    `"
                    >{{ color }}</span
                  >
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
                  focus:ring-2 focus:ring-offset-2 focus:ring-green-500
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  //   name: 'CreateNewOrganisation',
  data() {
    return {
      form: {
        name: '',
        color: '',
        description: '',
      },
      colors: [
        'dark',
        'gray',
        'red',
        'yellow',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
        'rose',
        'fuchsia',
        'violet',
        'cyan',
        'teal',
        'emerald',
        'lime',
        'amber',
        'orange',
        'light-blue',
        'warm-gray',
        'blue-gray',
      ],
    };
  },
  methods: {
    async submit() {
      let person = prompt('Please enter the password', '');
      if (person !== 'mousy-ignition-halogen') {
        return;
      }
      let response = await this.$axios.post('/api/', {
        query: `mutation createOrganisation($name: String!, $color: String!, $description: String!) {
          createOrganisation(input: {name: $name, color: $color, description: $description}) {
            name
          }
        }`,
        variables: this.form,
      });
      this.fetch();
    },
    async fetch() {
      await (
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
      ).data.data.getAllOrganisations.forEach(
        (organisation: {
          name: string;
          color: string;
          description: string;
        }) => {
          if (this.colors.includes(organisation.color)) {
            this.colors.splice(this.colors.indexOf(organisation.color), 1);
          }
        }
      );
    },
  },
  async mounted() {
    await this.fetch();
  },
});
</script>