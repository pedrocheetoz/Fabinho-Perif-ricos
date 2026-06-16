<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
  import { listaProdutos } from '@/data/product';

  import ProductCard from './ProductCard.vue';
import { ref } from 'vue';

</script>

<template>
      <div class="conteiner">

        <h1>Produtos</h1>
        <ProductCard v-for="produto in listaProdutos" :key="produto.id" :id="produto.id" :nome="produto.nome" :preco="produto.preco" :categoria="produto.categoria" :imagem="produto.imagem"></ProductCard>
      </div>
</template>

<style scoped>
  .conteiner{
    margin: 5vw;
  }
</style>
