<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <div class="container-fluid justify-content-center">
      <!-- Botão Hamburguer customizado -->
      <button
        class="navbar-toggler d-lg-none border-0 custom-toggler"
        type="button"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon custom-icon"></span>
      </button>
    </div>

    <!-- Menu Mobile/Tablet -->
    <div
      :class="[
        'collapse',
        'navbar-collapse',
        'justify-content-center',
        'text-center',
        'w-100',
        'd-lg-none',
        { show: isMenuOpen }
      ]"
      id="navbarMobile"
    >
      <ul class="navbar-nav w-100 py-3 custom-mobile-menu">
        <li class="nav-item" v-for="link in navLinks" :key="link.name">
          <router-link
            class="nav-link py-2 custom-link"
            :to="link.path"
            @click="toggleMenu"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const navLinks = [
      { name: "Home", path: "/" },
      { name: "Artigos", path: "/artigos" },
      { name: "Entrevistas", path: "/entrevistas" },
      { name: "Quem Sou", path: "/quem-sou" },
      { name: "Contato", path: "/contato" },
    ];

    return {
      isMenuOpen,
      toggleMenu,
      navLinks,
    };
  },
});
</script>

<style scoped>
/* Cores */
:root {
  --gold: #d4af37;
  --gold-hover: #b8860b;
  --menu-bg: #ffc401;
}

/* Botão hamburguer com ícone dourado */
.custom-toggler .custom-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23d4af37' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Menu dropdown */
.custom-mobile-menu {
  margin-top: 4px;
  background-color: black;
}

/* Links */
.custom-link {
  color: #b8860b !important;
  font-weight: bold;
  letter-spacing: 1px;
}

.custom-link:hover {
  color: #ffc401 !important;
}

/* Remove padding e oculta menu no desktop */
@media (min-width: 992px) {
  #navbarMobile {
    padding: 0 !important;
    display: none !important;
  }
}
</style>
