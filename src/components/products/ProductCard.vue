<script setup>
  import { ref } from 'vue';
  defineProps(['id', 'nome', 'preco', 'imagem', 'categoria'])
  import ButtonChild from '../ButtonChild.vue';
  import { formataPreco } from '@/utils/currencyUtils.js';
import ProdutoDialog from '../ProdutoDialog.vue';

const mostrarDialog = ref(false)
</script>

<template>
  <div class="produto-card">
    <div>
      <h2>{{ nome }}</h2>
      <p>Preço: {{ formataPreco(preco) }}</p>
    </div>
    <div>
    </div>
    <ButtonChild @clique="mostrarDialog = true">Editar</ButtonChild>
    <ProdutoDialog v-if="mostrarDialog" :nome="nome" :id="id"
      :categoria="categoria" :preco="preco" @fechar="mostrarDialog = false">

    </ProdutoDialog>
  </div>
</template>

<style scoped>
.produto-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border:1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}
.produto-imagem {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
