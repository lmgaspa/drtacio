<template>
  <footer class="footer-custom pt-0 pb-2 text-center">
    <h1 class="text-3xl font-bold cursor-default">Entre em contato conosco</h1>
    
    <a href="mailto:sociop@gmail.com" class="flex items-center justify-center space-x-2 cursor-pointer">
      <font-awesome-icon :icon="['fas', 'envelope']" class="w-6 h-6" />
      <p>sociop@gmail.com</p>
    </a>
    
    <a href="https://wa.me/+5573988698660" target="_blank" class="flex items-center justify-center space-x-2 cursor-pointer">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-6 h-6" />
      <p>(71) 98869-8660</p>
    </a>
    
    <p>
      Endereço: Rua Francisco Ribeiro Jr., 198, Sala 606 - Centro, Itabuna - BA.
    </p>
    
    <p>
      © Copywriter. Simple Software. Todos os direitos reservados. 2024.
    </p>
  </footer>
</template>

<style scoped>
.footer-custom {
  background-color: black;
  color: white;
}

.footer-custom a {
  color: white;
  text-decoration: none;
}

a:hover,
p:hover,
h1:hover {
  color: #b8860b;
  cursor: pointer;
  transition: color 0.3s ease;
}
</style>
