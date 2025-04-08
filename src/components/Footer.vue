<template>
  <footer class="p-4 bg-black text-white text-center">
    <h1 class="text-3xl font-bold mb-4 hover:#ffc401 transition duration-300 cursor-default">Entre em contato conosco</h1>
    <a href="mailto:sociop@gmail.com" class="flex items-center justify-center space-x-2 mt-2 hover:ffc401 transition duration-300 cursor-pointer">
      <font-awesome-icon :icon="['fas', 'envelope']" class="w-6 h-6" />
      <p class="hover:#ffc401">sociop@gmail.com</p>
    </a>
    <a href="https://wa.me/+5573988698660" target="_blank" class="flex items-center justify-center space-x-2 mt-2 hover:ffc401 transition duration-300 cursor-pointer">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-6 h-6" />
      <p class="hover:#ffc401">(73) 98869-8660</p>
    </a>
    <p class="mt-4 hover:#ffc401 transition duration-300 cursor-default">Endereço: Rua Francisco Ribeiro Jr., 198, Sala 606 - Centro, Itabuna - BA.</p>
    <p class="mt-4 hover:#ffc401 transition duration-300 cursor-default">© Copywriter. Simple Software. Todos os direitos reservados.  2024.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped>
</style>