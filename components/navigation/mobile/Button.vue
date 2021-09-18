<template>
  <div class="mr-2 -my-2 ml-auto md:hidden">
    <button
      type="button"
      class="
        bg-dark-800
        rounded-md
        p-2
        inline-flex
        items-center
        justify-center
        text-dark-50
        hover:text-dark-100
        hover:bg-dark-900
        focus:outline-none
        focus:ring-2 focus:ring-inset focus:ring-green-500
      "
      aria-expanded="false"
      @click="$emit('open')"
    >
      <span class="sr-only">Open menu</span>
      <!-- Heroicon name: outline/menu -->
      <svg
        class="h-6 w-6"
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</template>