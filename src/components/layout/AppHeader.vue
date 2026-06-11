<script setup>
  // Este arquivo é um componente Vue que representa o cabeçalho do aplicativo, contendo a barra de navegação com links para as principais seções do site, como Home, Produtos e Carrinho. Ele é projetado para ser reutilizado em todas as páginas do aplicativo, proporcionando uma navegação consistente para os usuários.
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/produtos">Produtos</RouterLink>
        <RouterLink to="/carrinho">Carrinho</RouterLink>

    </nav>
  </header>
</template>

<style scoped>
  header {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  background: #f8f8f8;
  z-index: 100;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
}

nav {
  display: flex;
  gap: 16px;
}
a {
  text-decoration: none;
  color: #333;
  list-style: none;
  text-decoration: none;
}
.router-link-active {
  font-weight: bold;
}
</style>
