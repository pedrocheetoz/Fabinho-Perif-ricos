<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/alimentos">Alimentos</RouterLink>
      <RouterLink to="/acessorios">Acessórios</RouterLink>
      <RouterLink to="/brinquedos">Brinquedos</RouterLink>
      <RouterLink to="/higiene">Higiente</RouterLink>
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
  color: #333
}
.router-link-active {
  font-weight: bold;
}
</style>
