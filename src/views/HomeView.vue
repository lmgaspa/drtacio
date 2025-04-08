<template>
  <div class="container-fluid p-0">
    <!-- Alterna entre coluna até 1400px e linha acima disso -->
    <div class="row g-0 h-100 d-flex flex-column responsive-direction">
      <!-- Lado esquerdo -->
      <div class="col-12 col-lg-6 p-0">
        <img
          src="../../public/tacio1.png"
          class="img-fluid w-100 h-100 object-fit-cover"
          alt="Imagem"
        />
      </div>

      <!-- Lado direito -->
      <div class="col-12 col-lg-6 p-0 bg-black text-light d-flex align-items-center justify-content-center">
        <div class="menu-container w-100 px-4 px-lg-5">
          <div class="mb-4 text-center">
            <h1 class="text-white fw-bold">Dr. Tacio Oliveira</h1>
            <p class="text-white fs-5">Advogado Criminalista</p>
          </div>
          <div class="d-grid gap-4 mx-auto menu-buttons">
            <router-link
              v-for="item in items"
              :key="item.label"
              :to="item.link"
              class="btn btn-lg t custom-btn text-decoration-none"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuLayout',
  data() {
    return {
      items: [
        { label: 'Artigos', link: '/artigos' },
        { label: 'Entrevistas', link: '/entrevistas' },
        { label: 'Quem Sou', link: '/quem-sou' },
        { label: 'Contato', link: '/contato' }
      ]
    }
  }
})
</script>

<style scoped>
.object-fit-cover {
  object-fit: cover;
}

.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #d4af37;
  background-color: black;
  text-align: center;
}

.custom-btn {
  color: #d4af37;
}

.custom-btn:hover{
  color: #ffc401;
}

.mb-footer {
  padding-bottom: 4rem;
}

@media (min-width: 1000px) {
  .responsive-direction {
    flex-direction: row !important;
  }
}
</style>
