// Este arquivo é um módulo JavaScript que contém a lógica relacionada ao carrinho de compras em um aplicativo Vue.js. Ele define uma estrutura de dados para representar os itens no carrinho, incluindo informações como id, título, autor, resenha, preço, capa (URL da imagem), quantidade e preço total. O módulo também exporta uma função addCarrinho que permite adicionar um livro ao carrinho, atualizando a quantidade e o preço total conforme necessário. A função utiliza a lista de produtos importada do arquivo /src/data/product.js para encontrar as informações do livro com base no id fornecido. Este módulo é projetado para ser usado em componentes relacionados ao carrinho de compras, permitindo que os usuários adicionem livros ao carrinho e visualizem os itens selecionados. AINDA PRECISAM SER ADICIONADAS VÁRIAS FUNÇÕES AQUI!!!
//Exemplo: Remover itens do carrinho, adicionar quantidade para o item já no carrinho, remover quantidade para o item já no carrinho, calcular o total do carrinho, filtrar livros por autor, por preço, etc. Vocês podem criar funções para cada uma dessas funcionalidades e exportá-las para serem usadas em outros componentes do aplicativo, como o ProductList.vue, onde o usuário poderá filtrar os livros disponíveis, ou no CartPanel.vue, onde o usuário poderá gerenciar os itens em seu carrinho de compras.

import { produtos } from '@/data/product'

const carrinho = [
  {
    id: 1,
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    resenha:
      'Um livro sobre boas práticas de programação, escrita de código limpo e melhoria da qualidade de software.',
    preco: 129.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    quantidade: 2,
    precoTotal: 259.8,
  },
  {
    id: 3,
    titulo: 'Eloquent JavaScript',
    autor: 'Marijn Haverbeke',
    resenha:
      'Uma introdução prática à linguagem JavaScript, com exemplos e conceitos fundamentais para desenvolvimento web.',
    preco: 89.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg',
    quantidade: 1,
    precoTotal: 89.9,
  },
  {
    id: 5,
    titulo: 'Design Patterns',
    autor: 'Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides',
    resenha:
      'Livro clássico sobre padrões de projeto e soluções reutilizáveis para problemas comuns de software.',
    preco: 159.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg',
    quantidade: 3,
    precoTotal: 479.7,
  },
]

function addCarrinho(idProd, quantidade) {
  const livro = produtos.find((p) => p.id === idProd)
  if (livro) {
    const itemExistente = carrinho.find((item) => item.id === idProd)
    if (itemExistente) {
      itemExistente.quantidade += quantidade
      itemExistente.precoTotal = itemExistente.quantidade * livro.preco
    } else {
      carrinho.push({
        ...livro,
        quantidade,
        precoTotal: quantidade * livro.preco,
      })
    }
  }
}

export { carrinho, addCarrinho }
