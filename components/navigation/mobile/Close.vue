<template>
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
      hover:text-dark-200
      transition-colors
      duration-100
      focus:outline-none
      focus:ring-2 focus:ring-inset focus:ring-green-500
    "
    @click="$emit('close')"
  >
    <span class="sr-only">Close menu</span>
    <!-- Heroicon name: outline/x -->
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>