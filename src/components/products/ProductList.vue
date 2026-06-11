<script setup>
  import { ref } from 'vue'
  import { listaProdutos } from '@/data/product';
  import ProductCard from './ProductCard.vue';
  import { formataPreco } from '@/utils/currencyUtils.js';
</script>

<template>
  <div class="container">
    <h1>Periféricos High-end</h1>
    <div class="produtos">
      <ProductCard v-for="produto in listaProdutos" :key="produto.id" :id="produto.id"
      :nome="produto.nome" :preco="produto.preco" :imagem="produto.imagem" :categoria="produto.categoria">
      </ProductCard>
    </div>

  </div>
</template>

<style scoped>
  .container h1{
    margin:5vw;
  }
  .produto-card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 16px;
    margin:10vw;
  }
</style>
