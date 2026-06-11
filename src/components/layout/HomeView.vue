<script setup>
import ProductCard from '../products/ProductCard.vue';
  import { ProdsHome } from '@/data/HomeProds.js';
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página de produtos.

</script>

<template>
  <div class="conteiner">
  <h1>Bem Vindo a Loja de Periféricos do Fabio</h1>
    <p>Veja alguns produtos:</p>
    <div class="produto-card">
      <ProductCard v-for="produto in ProdsHome"
      :key="produto.id"
      :imagem="produto.imagem"
      :nome="produto.nome"

      ></ProductCard>

    </div>
  </div>
</template>

<style scoped>
  .conteiner{
    margin: 5vw;
  }
  
</style>
