<template>
  <div class="container-fluid p-0">
  <div class="row g-0 h-100 d-flex flex-column responsive-direction">
    <div class="col-12 col-lg-6 p-0">
      <img
        src="../../public/tacio1.png"
        class="img-fluid object-fit-cover"
        alt="Imagem"
      />
    </div>

    <div class="col-12 col-lg-6 p-0 bg-black text-light d-flex align-items-center justify-content-center">
      <div class="menu-container w-100 px-4 px-lg-5">
        <div class="mb-4 text-center">
          <h1 class="fw-bold">Dr. Tacio Oliveira</h1>
          <p class="fs-5">Advogado Criminalista</p>
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
  color: #d4af37;
  background-color: black;
  text-align: center;
  padding: 2rem 1rem;
  cursor: pointer;
}

p,
h1 {
  color: white;
}

a:hover,
p:hover,
h1:hover {
  color: #b8860b;
  cursor: pointer;
  transition: color 0.3s ease;
}

/* Botões */
.custom-btn {
  color: #ffc401;
}
.custom-btn:hover {
  color: #d4af37;
}

/* Espaçamento condicional para telas grandes */
@media (min-width: 1000px) {
  .responsive-direction {
    flex-direction: row !important;
  }

  .menu-container {
    min-height: 100vh;
  }

  .object-fit-cover {
    height: 100vh;
  }
}

</style>
