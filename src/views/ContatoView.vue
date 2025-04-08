<template>
    <section>
      <h1>Contato</h1>
      <form>
        <label>Nome:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Mensagem:</label>
        <textarea></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }
  input, textarea {
    margin-bottom: 10px;
  }
  </style>