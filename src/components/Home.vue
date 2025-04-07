<template>
  <div class="container-fluid p-0 vh-100">
    <div class="row g-0 h-100 flex-md-row flex-column">
      <!-- Lado esquerdo: Imagem -->
      <div class="col-md-6">
        <img src="/tacio1.png" class="img-fluid h-100 w-100 object-fit-cover" alt="Imagem" />
      </div>

      <!-- Lado direito: Menu -->
      <div class="col-md-6 bg-dark text-light d-flex align-items-center justify-content-center">
        <div class="menu-container text-center w-100 px-5">
          <div class="mb-4">
            <h1 class="text-gold fw-bold">Dr. Tacio Oliveira</h1>
            <p class="text-gold fs-5">Advogado Criminalista</p>
          </div>
          <div class="d-grid gap-4 col-8 mx-auto">
            <router-link
              v-for="item in items"
              :key="item.label"
              :to="item.link"
              class="btn btn-lg custom-btn text-decoration-none"
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
  color: #d4af37;
}

.text-gold {
  color: #d4af37;
  transition: all 0.3s ease;
  cursor: pointer;
}

.text-gold:hover {
  color: #fff;
}

.custom-btn {
  background-color: transparent;
  border: 2px solid #d4af37;
  color: #d4af37;
  font-size: 1.5rem;
  padding: 15px 30px;
  transition: all 0.3s ease;
}

.custom-btn:hover {
  background-color: #d4af37;
  color: black;
}

/* Ajuste de layout em telas pequenas */
    
</style>