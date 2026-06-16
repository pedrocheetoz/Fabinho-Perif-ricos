// Este arquivo é um módulo JavaScript que contém a lógica relacionada ao carrinho de compras em um aplicativo Vue.js. Ele define uma estrutura de dados para representar os itens no carrinho, incluindo informações como id, título, autor, resenha, preço, capa (URL da imagem), quantidade e preço total. O módulo também exporta uma função addCarrinho que permite adicionar um livro ao carrinho, atualizando a quantidade e o preço total conforme necessário. A função utiliza a lista de produtos importada do arquivo /src/data/product.js para encontrar as informações do livro com base no id fornecido. Este módulo é projetado para ser usado em componentes relacionados ao carrinho de compras, permitindo que os usuários adicionem livros ao carrinho e visualizem os itens selecionados. AINDA PRECISAM SER ADICIONADAS VÁRIAS FUNÇÕES AQUI!!!
//Exemplo: Remover itens do carrinho, adicionar quantidade para o item já no carrinho, remover quantidade para o item já no carrinho, calcular o total do carrinho, filtrar livros por autor, por preço, etc. Vocês podem criar funções para cada uma dessas funcionalidades e exportá-las para serem usadas em outros componentes do aplicativo, como o ProductList.vue, onde o usuário poderá filtrar os livros disponíveis, ou no CartPanel.vue, onde o usuário poderá gerenciar os itens em seu carrinho de compras.

import { listaProdutos } from "@/data/product"

const carrinho = [
  {id: 1, nome: 'Mchoose-A7-Ultra', desc: '', preco: 350 , categoria: 'Mouse', imagem: 'public/img/Mchoose-A7-Ultra.png'},
  {id: 2, nome: 'Madlion 68he', desc: '', preco: 215 , categoria: 'Teclado', imagem: 'public/img/Madlion 68he.png'},
  {id: 3, nome: 'Logitech H390', desc: '', preco: 180, categoria: 'Headset', imagem: 'public/img/FoneLogitech.png'}
]

function addCarrinho(idProd, quantidade) {
  const produto = listaProdutos.find((p) => p.id === idProd)
  if (produto) {
    const itemExistente = carrinho.find((item) => item.id === idProd)
    if (itemExistente) {
      itemExistente.quantidade += quantidade
      itemExistente.precoTotal = itemExistente.quantidade * produto.preco
    } else {
      carrinho.push({
        ...produto,
        quantidade,
        precoTotal: quantidade * produto.preco,
      })
    }
  }
}

export { carrinho, addCarrinho }
