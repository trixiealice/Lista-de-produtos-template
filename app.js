'use strict'

import produtos from "./produtos.json" with { type: "json"}

function criarCard(produtos){
    const card = document.createElement('div')
    card.className = 'card'

    const foto = document.createElement('img')
    foto.src = `./img/${produto.imagem}`
    foto.alt = `Foto de ${produto.nome}`

    const nome = document.createElement('h3')
    nome.textContent = produto.nome

    const descricao = document.createElement('desc')
    cargo.textContent = produto.desc

    return card
}
