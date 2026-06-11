<script setup>
import { ref } from 'vue'
import { listaProdutos } from '@/data/product';
defineProps(['id', 'nome', 'preco', 'imagem', 'categoria'])
import { formataPreco } from '@/utils/currencyUtils';

import {ProdsHome} from '@/data/HomeProds.js'




</script>

<template>
  <div class="produto-card">
    <div>
      <h2>{{ nome }}</h2>
      <p>{{ formataPreco(preco) }}</p>
    </div>
    <div>
      <img :src="imagem" :alt="nome" class="produto-imagem" />
    </div>


  </div>
</template>
<style scoped>
.produto-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.produto-imagem {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>

