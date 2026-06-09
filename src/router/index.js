// Este arquivo é responsável por configurar as rotas do aplicativo Vue.js usando o Vue Router. Ele define as rotas para as principais páginas da aplicação, como a página inicial (HomeView), a página de listagem de produtos (ProductList) e a página do carrinho de compras (CartPanel). Cada rota é associada a um componente específico que será renderizado quando o usuário navegar para essa rota. O router é criado usando a função createRouter e exportado para ser usado em outras partes do aplicativo, como na configuração principal do Vue.js.

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/layout/HomeView.vue'
import ProductList from '@/components/products/ProductList.vue'
import CartPanel from '@/components/cart/CartPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/produtos',
      name: 'products',
      component: ProductList,
    },
    {
      path: '/carrinho',
      name: 'cart',
      component: CartPanel,
    }
  ],
})

export default router
