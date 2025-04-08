<template>
  <nav class="bg-black p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="hidden lg:flex space-x-4">
        <!-- Navegação principal removida -->
      </div>
      <button @click="toggleMenu" class="lg:hidden text-color2">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div
      v-if="isMenuOpen"
      class="lg:hidden bg-color2 text-center mt-2 space-y-2"
    >
      <!-- Menu mobile removido -->
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const isMenuOpen = ref(false);

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }

    function closeMenu() {
      isMenuOpen.value = false;
    }

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
    };
  },
});
</script>

<style scoped>
</style>
